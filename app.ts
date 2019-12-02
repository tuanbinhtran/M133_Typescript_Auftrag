import express from "express";

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
	res.end();
});

app.listen(3000, () => {
	console.log('App listening on port 3000');
	console.log('http://localhost:3000');
});