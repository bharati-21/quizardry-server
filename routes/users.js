const express = require("express");
const router = express.Router();
const { postQuizAttempt } = require("../controllers/users-controller");

router.post("/:userId/quizAttempts", postQuizAttempt);

module.exports = router;
