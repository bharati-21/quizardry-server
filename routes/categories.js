const express = require("express");
const router = express.Router();
const verifyAuth = require("../middleware/verifyAuth");
const {
	getCategories,
	getCategoryItems,
} = require("../controllers/categories-controller");

router.get("/", verifyAuth, getCategories);
router.get("/:categoryId", verifyAuth, getCategoryItems);

module.exports = router;
