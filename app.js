const express = require('express');
const functions = require("firebase-functions");
const path = require('path');
var firebase = require('firebase');
// const admin = require('firebase-admin');
const volleyball = require('volleyball')
// const serviceAccount = require('serviceAccountKey.json');

const PORT = process.env.PORT || 8080


// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// 	databaseURL: 'https://derby-footage.firebaseio.com'
// });

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('body-parser').urlencoded());

// static middleware
app.use(express.static(path.join(__dirname, 'public')));

// if (process.env.NODE_ENV !== 'production') require('./secrets');

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error')
});

app.listen(PORT, () =>
	console.log(`Mixing it up on port ${PORT}`)
);

const api = functions.https.onRequest(app)

module.exports = { api };
