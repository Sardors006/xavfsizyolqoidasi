const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all rules
router.get('/', async (req, res) => {
  try {
    const rules = await prisma.rule.findMany();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: 'Qoidalarni yuklashda xatolik yuz berdi.' });
  }
});

// Get today's dynamic rule
router.get('/daily', async (req, res) => {
  try {
    const rules = await prisma.rule.findMany();
    if (rules.length === 0) return res.json(null);
    // Use the current day of the year to pick a deterministic daily rule
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = new Date() - start;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const dailyRule = rules[dayOfYear % rules.length];
    res.json(dailyRule);
  } catch (error) {
    res.status(500).json({ error: 'Bugungi qoidani yuklashda xatolik yuz berdi.' });
  }
});

module.exports = router;
