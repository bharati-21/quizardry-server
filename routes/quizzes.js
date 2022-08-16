const express = require("express");
const router = express.Router();
const {
	getQuiz,
	postItemToQuiz,
	deleteItemFromQuiz,
	getAllQuizItems,
} = require("../controllers/quizzes-controller");

router.route("/").get(getAllQuizItems).post(postItemToQuiz);
router.route("/:quizId").get(getQuiz).delete(deleteItemFromQuiz);

module.exports = router;
