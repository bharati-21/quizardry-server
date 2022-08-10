const mongoose = require("mongoose");

/* Schema: blue print */
/* Model: instance of this schema */

const categorySchema = new mongoose.Schema({
	categoryId: {
		type: mongoose.ObjectId,
		required: true,
	},
	categoryName: {
		type: String,
		required: true,
	},
});

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
		category: {
			type: categorySchema,
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
		creatorUserId: {
			type: mongoose.ObjectId,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Model: adds schema to the model

module.exports = mongoose.model("Quiz", quizSchema);
