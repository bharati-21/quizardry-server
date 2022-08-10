const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const categoriesRoutes = require("./categories");
const quizzesRoutes = require("./quizzes");
const usersRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/categories", categoriesRoutes);
router.use("/quizzes", quizzesRoutes);
router.use("/users", usersRoutes);

module.exports = router;
