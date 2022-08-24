const cors = require("cors");

const originList = ["https://quizardry.netlify.app"];
var corsOptions = {
	origin: (origin, callback) => {
		if (originList.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};

module.exports = cors(corsOptions);
