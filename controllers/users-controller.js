const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const signup = async (req, res) => {
	const { data } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email: data.email });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Sign up failed. Please try again later." });
	}

	if (existingUser) {
		return res
			.status(409)
			.json({ message: "User already exists with the same email." });
	}
	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(data.password, 12);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Sign up failed. Please try again later." });
	}

	const createdUser = new User({
		...data,
		password: hashedPassword,
		totalScore: 0,
		quizAttemps: [],
	});

	try {
		await createdUser.save();
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Sign up failed. Please try again later." });
	}

	const token = jwt.sign(
		{
			userId: createdUser._id,
			email: createdUser.email,
		},
		process.env.SECRET_KEY,
		{ expiresIn: "24h" }
	);

	res.status(201).json({
		message: "Signup successful",
		user: {
			token,
			userId: createdUser._id,
			firstName: createdUser.firstName,
			lastName: createdUser.lastName,
			email: createdUser.email,
			totalScore: existingUser.totalScore,
			quizAttempts: existingUser.quizAttempts,
		},
	});
};

const login = async (req, res) => {
	const { data } = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({ email: data.email });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Login failed. Please try again later." });
	}

	if (!existingUser) {
		return res.status(401).json({
			message: "Invalid credentials. Could not find and existing user.",
		});
	}

	let isValidPassword = false;
	try {
		isValidPassword = await bcrypt.compare(
			data.password,
			existingUser.password
		);
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Login failed. Please try again later." });
	}

	if (!isValidPassword) {
		return res.status(401).json({
			message: "Invalid credentials. Could not find and existing user.",
		});
	}

	const token = jwt.sign(
		{
			userId: existingUser._id,
			email: existingUser.email,
		},
		process.env.SECRET_KEY,
		{ expiresIn: "24h" }
	);

	res.status(200).json({
		message: "Login successful.",
		user: {
			token,
			userId: existingUser._id,
			firstName: existingUser.firstName,
			lastName: existingUser.lastName,
			email: existingUser.email,
			totalScore: existingUser.totalScore,
			quizAttempts: existingUser.quizAttempts,
		},
	});
};

const postQuizAttempt = async (req, res) => {
	const { data } = req.body;
	const { userId } = req.params;
	const verifiedUserId = req.userId;

	if (verifiedUserId !== userId) {
		return res.status(401).json({
			message: "Invalid request. Authorization error.",
		});
	}
	try {
		const userData = await User.findById(userId);
		const updatedUserQuizAttempts = [data, ...userData.quizAttempts];
		const updatedTotalscore = userData.totalScore + data.totalScore;

		const updatedData = await User.findByIdAndUpdate(
			userId,
			{
				$set: {
					quizAttempts: updatedUserQuizAttempts,
					totalScore: updatedTotalscore,
				},
			},
			{ new: true }
		);
		res.status(200).json({
			message: "Updated quiz attempt successfully",
			updatedData: {
				totalScore: updatedData.totalScore,
				quizAttempts: updatedData.quizAttempts,
			},
		});
	} catch (error) {
		res.status(500).json({
			message:
				"Something went wrong. Could not post quiz attempt to server.",
		});
	}
};

module.exports = { signup, login, postQuizAttempt };
