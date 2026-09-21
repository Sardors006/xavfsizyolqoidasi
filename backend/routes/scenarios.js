const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/auth');
const prisma = new PrismaClient();

// Get all scenarios (with optional category filter)
router.get('/', async (req, res) => {
  const { category } = req.query;
  try {
    const filter = category ? { category } : {};
    const scenarios = await prisma.scenario.findMany({
      where: filter,
      include: {
        options: {
          select: { id: true, text: true, isCorrect: false } // Do not expose isCorrect directly if not needed, but we need it for verification. Actually we evaluate on backend.
        }
      }
    });
    // Remove the explanation and correctness from the response to prevent cheating
    const safeScenarios = scenarios.map(s => {
      const { explanation, ...safeS } = s;
      safeS.options = safeS.options.map(o => ({ id: o.id, text: o.text }));
      return safeS;
    });
    res.json(safeScenarios);
  } catch (error) {
    res.status(500).json({ error: 'Vaziyatlarni yuklashda xatolik yuz berdi.' });
  }
});

// Submit a scenario answer
router.post('/:id/answer', authenticateToken, async (req, res) => {
  const { optionId } = req.body;
  const scenarioId = req.params.id;
  try {
    const scenario = await prisma.scenario.findUnique({
      where: { id: scenarioId },
      include: { options: true }
    });

    if (!scenario) return res.status(404).json({ error: 'Vaziyat topilmadi.' });

    const selectedOption = scenario.options.find(o => o.id === optionId);
    if (!selectedOption) return res.status(400).json({ error: 'Noto‘g‘ri variant tanlandi.' });

    let earnedPoints = 0;
    if (selectedOption.isCorrect) {
      earnedPoints = scenario.points;
      // Record progress and update user points
      await prisma.$transaction(async (tx) => {
        // Check if already completed
        const existingProgress = await tx.userProgress.findFirst({
          where: { userId: req.user.userId, type: 'SCENARIO', refId: scenarioId }
        });
        
        if (!existingProgress) {
          await tx.userProgress.create({
            data: { userId: req.user.userId, type: 'SCENARIO', refId: scenarioId, score: earnedPoints }
          });
          await tx.user.update({
            where: { id: req.user.userId },
            data: { points: { increment: earnedPoints } }
          });
          await checkLevelUp(tx, req.user.userId);
        }
      });
    }

    res.json({
      isCorrect: selectedOption.isCorrect,
      explanation: scenario.explanation,
      earnedPoints: selectedOption.isCorrect ? earnedPoints : 0,
      correctOptionId: scenario.options.find(o => o.isCorrect)?.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Javobni saqlashda xatolik yuz berdi.' });
  }
});

async function checkLevelUp(tx, userId) {
  const user = await tx.user.findUnique({ where: { id: userId } });
  let newLevel = "Boshlang‘ich";
  if (user.points >= 1000) newLevel = "Yo‘l xavfsizligi eksperti";
  else if (user.points >= 500) newLevel = "Tajribali";
  else if (user.points >= 150) newLevel = "Ehtiyotkor";

  if (user.level !== newLevel) {
    await tx.user.update({ where: { id: userId }, data: { level: newLevel } });
  }
}

module.exports = router;
