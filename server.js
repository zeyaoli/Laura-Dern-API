const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
// const Datastore = require('nedb');
const viewsURL = path.resolve(`${__dirname}/public`);
const app = express();

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('connected to database');
});

const ListSchema = mongoose.Schema({
	type      : String,
	name      : String,
	year      : Number,
	character : String,
	image     : String
});

const List = mongoose.model('List', ListSchema);

app.use(express.static(viewsURL));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/documentation', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/documentation.html'));
});

app.get('/documentation/movie', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/movie.html'));
});

app.get('/documentation/tv', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/tvshow.html'));
});

app.get('/documentation/random', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/random.html'));
});

app.get('/submit', (req, res) => {
	res.sendFile(path.join(__dirname, 'views/submit.html'));
});

const getData = (cb) => {
	List.find({}).sort({ year: -1 }).exec((err, docs) => {
		cb(err, docs);
	});
};

const addData = (data, cb) => {
	List.create(data, (err, newData) => {
		cb(err, newData);
	});
};

app.get('/api', (req, res) => {
	// const year = req.query.year;
	// if(req.query.type) else
	// getData((err, lists) => {
	// 	res.json(lists);
	// });
	console.log(req.query);
	getData((err, docs) => {
		res.json(docs);
	});
});

app.get('/api/random', (req, res) => {
	getData((err, docs) => {
		res.json(docs[Math.floor(Math.random() * docs.length)]);
	});
});

app.get('/api/type/movie', (req, res) => {
	List.find({ type: 'movie' }, (err, docs) => {
		res.json(docs);
	});
});

app.get('/api/type/tv', (req, res) => {
	List.find({ type: 'tv show' }, (err, docs) => {
		res.json(docs);
	});
});

app.post('/api', (req, res) => {
	const newData = req.body;
	addData(newData, (err, newData) => {
		res.json(newData);
	});
});

app.delete('/api/:id', (req, res) => {
	const id = req.params.id;

	List.findByIdAndDelete(id, (err, deletedObject) => {
		res.json({ deletedObject: deletedObject });
	});
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening on port 3000`);
});
