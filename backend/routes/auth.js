const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const authenticateToken = require('../middleware/auth');

const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if(!name || !email || !password) {
      return res.status(400).json({ error: 'Barcha maydonlarni to‘ldirish shart.' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Bu email orqali allaqachon ro‘yxatdan o‘tilgan.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, points: user.points, level: user.level } });
  } catch (error) {
    res.status(500).json({ error: 'Xatolik yuz berdi.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Email yoki parol noto‘g‘ri.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Email yoki parol noto‘g‘ri.' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, points: user.points, level: user.level } });
  } catch (error) {
    res.status(500).json({ error: 'Xatolik yuz berdi.' });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ 
      where: { id: req.user.userId },
      select: { id: true, name: true, email: true, points: true, level: true, createdAt: true }
    });
    if(!user) return res.status(404).json({error: 'Foydalanuvchi topilmadi.'});
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Xatolik yuz berdi.' });
  }
});

module.exports = router;
