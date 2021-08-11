const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dot env

dotenv.config();
const PORT = process.env.PORT || 3012;

// DB

const db = mysql.createPool({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});
mysql.createConnection;

app.get("/:names", (req, res) => {
	// console.log(req.params.names);
	const querying = `select * from ${req.params.names} limit 30`;
	db.query(querying, (error, result) => {
		// console.log("His");
		if (error) console.log(error);
		res.send(result);
	});
});

app.get("/view/:names/:id", (req, res) => {
	// console.log(req.params);
	let names = req.params.names;
	let Ids = req.params.id;
	// console.log(names, Ids);

	const gettingOneQuery = `select * from ${names} where Id = ?`;
	db.query(gettingOneQuery, [Ids], (error, result) => {
		// console.log(result);
		// console.log(error);
		if (error) console.log(error);
		res.send(result);
	});
});

app.put("/api/update/:names/:id", (req, res) => {
	const Ids = Number(req.params.id);
	const { Image } = req.body;
	const names = req.params.names;

	const updateQuery = `update ${names} set Image = ? where Id = ?`;
	db.query(updateQuery, [Image, Ids], (error, result) => {
		// console.log(error);
		// console.log(result);
		if (error) console.log(error);
		res.send(result);
	});
});

app.delete("/api/delete/:id", (req, res) => {
	const id = req.params.id;
	const ids = Number(id);
	const databaseName = req.body.names;
	// console.log(databaseName);
	const deletQuery = `delete from ${databaseName} where Id = ?`;
	db.query(deletQuery, [ids], (error, result) => {
		if (error) console.log(error);
		res.send("done");
	});
});

app.listen(PORT, () => console.log(`Listining on ${PORT}`));
