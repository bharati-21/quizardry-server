const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.url);
    res.json({ message: "categories" })
});
router.get("/:id", (req, res) => {
    console.log(req.url);
    res.json({ message: "categories/:id" })
});

module.exports = router;