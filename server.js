const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const userController = require('./db/userController');

const app = express();

const mongoURI = 'mongodb://localhost:27017/lrn_express';
mongoose.connect(mongoURI);

let counter = 5;
username = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/ang-index.html');
});

// route with restrict middleware
// app.get('/take-pic', (req, res) => {
//   res.sendFile(__dirname + '/client/take-a-pic.html');
// });

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/client/style.css');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/client/signup.html');
});

// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/client/login.html');
// });

app.get('/profile', (req, res) => {
  res.sendFile(__dirname + '/client/profile.html');
});

app.get('/pictures', (req, res) => {
  res.sendFile(__dirname + '/client/pictures.html');
});

app.post('/signup',
  userController.createUser,
  (req, res) => {
    res.redirect('#/take-a-pic');
  }
);

app.post('/logins',
  userController.checkLogin,
  (req, res) => {
    res.redirect('/take-pic');
  }
);

app.post('/image', (req, res) => {
  if (username !== '') {
    const img = req.body.imgBase64;
    const data = img.replace(/^data:image\/\w+;base64,/, '');
    const buf = new Buffer(data, 'base64');
    const imageName = `images/${username}-${counter}.png`;
    fs.writeFile(imageName, buf);
    counter++;
    res.sendStatus(200);
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = app;
