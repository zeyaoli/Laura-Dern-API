const express = require('express');
const path = require('path');
const fs = require('fs');
const Datastore = require('nedb');
const viewsURL = path.resolve(`${__dirname}/public`);
const app = express();

const db = new Datastore({ filename: `lauradern.db`, autoload: true });
// console.log(db);

app.use(express.static(viewsURL));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/index.html'));
});

const getData = (cb) => {
	db.find({}, (err, lists) => {
		cb(err, lists);
	});
};

const addData = (data, cb) => {
	db.insert({ list: data }, (err, newData) => {
		cb(err, newData);
	});
};

app.get('/api', (req, res) => {
	getData((err, lists) => {
		res.json(lists);
	});
});

app.post('/api', (req, res) => {
	const newList = req.body;
	addData(newList, (err, newData) => {
		res.json(newData);
	});
});

app.listen(3000, () => {
	console.log(`Server is listening on port 3000`);
});
