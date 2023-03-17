const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/data", function (req, res) {
	console.log(req.body.name);
	console.log(req.body.email);
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});