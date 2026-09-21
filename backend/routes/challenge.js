const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/auth');
const prisma = new PrismaClient();

// Get challenge progress
router.get('/', authenticateToken, async (req, res) => {
  try {
    const days = await prisma.challengeDay.findMany({
      orderBy: { dayNumber: 'asc' }
    });

    const progress = await prisma.userProgress.findMany({
      where: { userId: req.user.userId, type: 'CHALLENGE' }
    });

    const completedDays = progress.map(p => p.refId);

    const challengeStatus = days.map(day => ({
      ...day,
      isCompleted: completedDays.includes(day.id)
    }));

    res.json(challengeStatus);
  } catch (error) {
    res.status(500).json({ error: 'Challengeni yuklashda xatolik yuz berdi.' });
  }
});

// Complete a challenge day
router.post('/:dayId/complete', authenticateToken, async (req, res) => {
  const { dayId } = req.params;
  try {
    const day = await prisma.challengeDay.findUnique({ where: { id: dayId } });
    if (!day) return res.status(404).json({ error: 'Kun topilmadi.' });

    const existingProgress = await prisma.userProgress.findFirst({
      where: { userId: req.user.userId, type: 'CHALLENGE', refId: dayId }
    });

    if (existingProgress) {
      return res.status(400).json({ error: 'Bu kun vazifasi allaqachon bajarilgan.' });
    }

    await prisma.$transaction(async (tx) => {
      await tx.userProgress.create({
        data: {
          userId: req.user.userId,
          type: 'CHALLENGE',
          refId: dayId,
          score: day.rewardPoints
        }
      });
      await tx.user.update({
        where: { id: req.user.userId },
        data: { points: { increment: day.rewardPoints } }
      });
    });

    res.json({ success: true, earnedPoints: day.rewardPoints });
  } catch (error) {
    res.status(500).json({ error: 'Vazifani bajarishda xatolik yuz berdi.' });
  }
});

module.exports = router;
