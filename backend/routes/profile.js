const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/auth');
const prisma = new PrismaClient();

// Get profile stats and history
router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      include: {
        progress: {
          orderBy: { createdAt: 'desc' }
        },
        testResults: {
          orderBy: { createdAt: 'desc' }
        },
        achievements: {
          include: { achievement: true }
        }
      }
    });

    if (!user) return res.status(404).json({ error: 'Foydalanuvchi topilmadi.' });

    // Aggregate stats
    const scenariosCompleted = user.progress.filter(p => p.type === 'SCENARIO').length;
    const testsCompleted = user.testResults.length;
    
    let totalQuestions = 0;
    let correctAnswers = 0;
    user.testResults.forEach(tr => {
      totalQuestions += tr.totalQuestions;
      correctAnswers += tr.score;
    });
    
    const correctPercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    const challengeDaysCompleted = user.progress.filter(p => p.type === 'CHALLENGE').length;

    // We can also evaluate achievements here (optional, or it can be a separate trigger)
    // For now, let's just evaluate them on the fly and award them if condition met.
    const allAchievements = await prisma.achievement.findMany();
    const unlockedIds = user.achievements.map(a => a.achievementId);
    
    for (const ach of allAchievements) {
      if (!unlockedIds.includes(ach.id)) {
        let unlock = false;
        if (ach.conditionType === 'TESTS_COMPLETED' && testsCompleted >= ach.conditionValue) unlock = true;
        if (ach.conditionType === 'SCENARIOS_COMPLETED' && scenariosCompleted >= ach.conditionValue) unlock = true;
        if (ach.conditionType === 'TOTAL_POINTS' && user.points >= ach.conditionValue) unlock = true;
        if (ach.conditionType === 'CHALLENGE_DAYS' && challengeDaysCompleted >= ach.conditionValue) unlock = true;
        if (ach.conditionType === 'PERFECT_TEST' && user.testResults.some(tr => tr.score === tr.totalQuestions && tr.totalQuestions > 0)) unlock = true;

        if (unlock) {
          await prisma.userAchievement.create({
            data: { userId: user.id, achievementId: ach.id }
          });
          // Optimistically add to user achievements for current response
          user.achievements.push({ achievement: ach, unlockedAt: new Date() });
        }
      }
    }

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        points: user.points,
        level: user.level,
        createdAt: user.createdAt
      },
      stats: {
        scenariosCompleted,
        testsCompleted,
        correctPercentage,
        challengeDaysCompleted
      },
      achievements: user.achievements.map(a => ({
        ...a.achievement,
        unlockedAt: a.unlockedAt
      })),
      recentActivity: [
        ...user.progress.slice(0, 5).map(p => ({ type: p.type, date: p.createdAt, score: p.score })),
        ...user.testResults.slice(0, 5).map(tr => ({ type: 'TEST', date: tr.createdAt, score: tr.score }))
      ].sort((a,b) => b.date - a.date).slice(0, 10)
    });
  } catch (error) {
    res.status(500).json({ error: 'Profilni yuklashda xatolik yuz berdi.' });
  }
});

module.exports = router;
