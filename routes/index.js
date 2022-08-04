const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const categoriesRoutes = require('./categories');
const rulesRoutes = require('./rules');
const quizzesRoutes = require('./quizzes');

router.use('/auth', authRoutes);
router.use('/categories', categoriesRoutes);
router.use('/rules', rulesRoutes);
router.use('/quizzes', quizzesRoutes);

module.exports = router;