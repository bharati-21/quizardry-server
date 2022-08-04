const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.url)
});
router.get("/:id", (req, res) => {
    console.log(req.url)
});

module.exports = router;