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

module.exports = { getQuiz };
