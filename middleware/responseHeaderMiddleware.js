module.exports = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested, Content-Type, Accept Authorization"
	);
	next();
};
