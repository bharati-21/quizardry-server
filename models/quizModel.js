const mongoose = require("mongoose");

/* Schema: blue print */
/* Model: instance of this schema */

const questionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	options: [
		{
			option: {
				type: String,
				required: true,
			},
			isCorrect: {
				type: Boolean,
				required: true,
			},
		},
	],
});
const quizSchema = new mongoose.Schema(
	{
		categoryId: {
			type: ObjectId,
			required: true,
		},
		quizName: {
			type: String,
			required: true,
		},
		questions: {
			type: [questionSchema],
			required: true,
		},
		numQuestions: {
			type: Number,
			required: true,
		},
		marksPerQuestion: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Model: adds schema to the model

module.exports = mongoose.model("Quiz", quizSchema);
