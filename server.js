const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// express app
const app = express();
const port = process.env.PORT;
const mongoURL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

mongoose
	.connect(mongoURL, { dbName: "quiz-database" })
	.then(() => {
		app.listen(port, () => {
			console.log(`Listening on port ${port}...`);
		});
	})
	.catch((error) => console.log("Connection Failed", error));
