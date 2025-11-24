const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Todo = require('./models/Todo');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessions
app.use(session({
  secret: 'mysecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 } // 1 day
}));

// Serve static files from public/
app.use(express.static('public'));

// MongoDB Atlas connection
mongoose.connect('YOUR_MONGODB_ATLAS_URL')
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
