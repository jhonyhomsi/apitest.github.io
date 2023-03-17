const express = require("express");
const xlsx = require('xlsx');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/data", function (req, res) {
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	console.log(req.body.email);
	console.log(req.body.number);
	console.log(req.body.password);
	const name = req.body.firstname
	const data = req.body;
	const workbook = xlsx.utils.book_new();
	const sheet = xlsx.utils.json_to_sheet([data]);
	xlsx.utils.book_append_sheet(workbook, sheet, `${name}`);
	xlsx.writeFile(workbook, `${name}.xlsx`);
	res.send('Form submitted successfully!');
});

app.listen(3000, function () {
	console.log("Server started on port 3000");
});