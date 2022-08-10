const express = require("express");
const router = express.Router();
const verifyAuth = require("../middleware/verifyAuth");
const { postQuizAttempt } = require("../controllers/users-controller");

router.post("/:userId/quizAttempts", verifyAuth, postQuizAttempt);

module.exports = router;
