const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

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

const optionSchema = new mongoose.Schema({
	_id: mongoose.ObjectId,
	option: String,
});

const quizAttemptsSchema = new mongoose.Schema({
	category: {
		type: categorySchema,
		required: true,
	},
	quizId: mongoose.ObjectId,
	quizName: String,
	totalScore: Number,
	selectedOptions: [optionSchema],
});

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		totalScore: {
			type: Number,
			required: true,
		},
		quizAttempts: {
			type: [quizAttemptsSchema],
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
