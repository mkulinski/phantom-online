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

let counter = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/ang-index.html'));
});

app.post('/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).json({
      status: 'Signup successful!',
    });
  }
);

app.post('/login',
  userController.checkLogin,
  (req, res) => {
    res.status(200).json({
      status: 'Login successful!',
    });
  }
);

app.post('/image', (req, res) => {
  if (req.body.username) {
    let img = req.body.imgBase64;
    let data = img.replace(/^data:image\/\w+;base64,/, '');
    let buf = new Buffer(data, 'base64');
    let imageName = `images/${req.body.username}-${counter}.png`;
    fs.writeFile(imageName, buf);
    counter++;
    res.status(200).json({
      status: 'Image Saved!',
    });
  } else {
    return res.status(401).json({
      err: 'err',
    });
  }
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = app;
