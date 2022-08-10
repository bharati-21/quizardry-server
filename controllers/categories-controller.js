const Category = require("../models/categoryModel");
const Quiz = require("../models/quizModel");

const getCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		res.status(200).json({
			message: "Categories",
			categories,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Failed to get categories. Please try again later.",
		});
	}
};

const getCategoryItems = async (req, res) => {
	const { categoryId } = req.params;
	try {
		const items = await Quiz.find({ "category.categoryId": categoryId });
		if (!items || (items && !items.length)) {
			res.status(404).json({
				message: "Selected category not found.",
			});
			return;
		}
		res.status(200).json({
			message: "Items of selected category",
			items,
		});
	} catch (error) {
		return res.status(500).json({
			message:
				"Failed to get items for the selected category. Please try again later.",
		});
	}
};

module.exports = { getCategories, getCategoryItems };
