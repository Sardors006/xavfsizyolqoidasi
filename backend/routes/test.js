const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/auth');
const prisma = new PrismaClient();

// Get random 10 questions for a test
router.get('/', authenticateToken, async (req, res) => {
  try {
    // Fetch all questions, shuffle and pick 10
    const questions = await prisma.question.findMany({
      include: {
        options: {
          select: { id: true, text: true } // Don't expose isCorrect
        }
      }
    });

    // Shuffle array
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    const testQuestions = questions.slice(0, 10).map(q => {
      const { explanation, ...safeQ } = q;
      return safeQ;
    });

    res.json(testQuestions);
  } catch (error) {
    res.status(500).json({ error: 'Test savollarini yuklashda xatolik yuz berdi.' });
  }
});

// Submit test results
router.post('/submit', authenticateToken, async (req, res) => {
  const { answers } = req.body; // Array of { questionId, optionId }
  try {
    let score = 0;
    const mistakes = [];

    for (const ans of answers) {
      const question = await prisma.question.findUnique({
        where: { id: ans.questionId },
        include: { options: true }
      });
      if (question) {
        const selected = question.options.find(o => o.id === ans.optionId);
        const correct = question.options.find(o => o.isCorrect);

        if (selected && selected.isCorrect) {
          score++;
        } else {
          mistakes.push({
            questionText: question.text,
            selectedOptionText: selected ? selected.text : "Javob belgilanmagan",
            correctOptionText: correct ? correct.text : "",
            explanation: question.explanation
          });
        }
      }
    }

    // Save test result
    await prisma.$transaction(async (tx) => {
      await tx.testResult.create({
        data: {
          userId: req.user.userId,
          score,
          totalQuestions: answers.length || 10
        }
      });
      
      const earnedPoints = score * 5;
      if (earnedPoints > 0) {
        await tx.user.update({
          where: { id: req.user.userId },
          data: { points: { increment: earnedPoints } }
        });
      }
    });

    res.json({
      score,
      totalQuestions: answers.length || 10,
      mistakes,
      earnedPoints: score * 5
    });
  } catch (error) {
    res.status(500).json({ error: 'Natijani saqlashda xatolik yuz berdi.' });
  }
});

module.exports = router;
