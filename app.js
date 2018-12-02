const express = require('express')
const path = require('path')

const volleyball = require('volleyball')

const PORT = process.env.PORT || 8080

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

module.exports = app;
