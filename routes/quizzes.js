const express = require("express");
const router = express.Router();
const verifyAuth = require("../middleware/verifyAuth");
const { getQuiz } = require("../controllers/quizzes-controller");
const Quiz = require("../models/quizModel");

router.get("/", verifyAuth, async (req, res) => {
	const quiz = await Quiz.find({});
	if (!quiz) {
		res.status(404).json({
			message: "Quiz with selected id not found.",
		});
		return;
	}
	res.status(200).json({
		message: "Quiz",
		quiz,
	});
});
router.get("/:quizId", verifyAuth, getQuiz);

module.exports = router;
