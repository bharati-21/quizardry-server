const Quiz = require("../models/quizModel");

const getQuiz = async (req, res) => {
	const { quizId } = req.params;
	try {
		const quiz = await Quiz.findById(quizId);
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
	} catch (error) {
		return res.status(500).json({
			message: "Failed to get the selected quiz. Please try again later.",
		});
	}
};

const postItemToQuiz = async (req, res) => {
	const { quiz } = req.body;
	try {
		const quizzes = await Quiz.find({});
		quizzes.push(quiz);
		const newQuiz = new Quiz(quiz);
		await newQuiz.save();
		return res.status(201).json({
			message: "Posted new quiz item",
			quizzes: quiz,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Failed to post item to quizzes. Please try again later.",
		});
	}
};

const deleteItemFromQuiz = async (req, res) => {
	const { quizId } = req.params;
	try {
		let quizzes = await Quiz.find({});
		quizzes = quizzes.filter((quiz) => quiz._id != quizId);
		await Quiz.findByIdAndDelete(quizId);
		return res.status(200).json({
			message: "Selected quiz has been deleted successfully.",
			quizzes,
		});
	} catch (error) {
		return res.status(500).json({
			message:
				"Failed to delete item from quizzes. Please try again later.",
		});
	}
};

const getAllQuizItems = async (req, res) => {
	const quiz = await Quiz.find({});
	if (!quiz) {
		return res.status(404).json({
			message: "Quiz with selected id not found.",
		});
	}
	res.status(200).json({
		message: "Quiz",
		quiz,
	});
};

module.exports = {
	getQuiz,
	postItemToQuiz,
	deleteItemFromQuiz,
	getAllQuizItems,
};
