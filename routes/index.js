const express = require("express");
const verifyAuth = require("../middleware/verifyAuth");
const router = express.Router();

const authRoutes = require("./auth");
const categoriesRoutes = require("./categories");
const quizzesRoutes = require("./quizzes");
const usersRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/categories", categoriesRoutes);
router.use("/quizzes", verifyAuth, quizzesRoutes);
router.use("/users", verifyAuth, usersRoutes);

module.exports = router;
