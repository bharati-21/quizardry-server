const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    console.log(req.url)
    res.json({ message: "quizzes" })
}).post((req, res) => {
    console.log(req.url)
    res.json({ message: "quizzes" })
});

router.route("/:id").get((req, res) => {
    console.log(req.url)
    res.json({ message: "quizzes/:id" })
});

router.get('/leaderboard', (req, res) => {
    console.log(req.url)
    res.json({ message: "/quizzes/leaderboard" })
});
router.get("/:id/questions", (req, res) => {
    console.log(req.url)
    res.json({ message: "/quizzes/:id/questions" })
});
router.get("/:id/questions/:questionId", (req, res) => {
    console.log(req.url)
    res.json({ message: "/quizzes/:id/questions/:questionId" })
});
router.post("/:id/answers", (req, res) => {
    console.log(req.url)
    res.json({ message: "/:id/answers" })
});

router.get('/:id/leaderboard', (req, res) => {
    console.log(req.url)
    res.json({ message: "quizzes/:id/leaderboard" })
});

module.exports = router;