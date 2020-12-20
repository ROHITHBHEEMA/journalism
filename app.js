const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRouter = require('./routes/client');
const adminRouter = require('./routes/admin');

const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const findOrCreate = require('mongoose-findorcreate');

const app = express();



//views
app.set('view engine', 'ejs');
app.set('views', 'views');

//cookies and sessions
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//public
app.use(express.static(path.join(__dirname, 'public')));



mongoose.connect('mongodb+srv://rohith:13vF7uFZWb24IXoM@cluster0.ayzod.mongodb.net/journal?retryWrites=true&w=majority')
.then(result => {
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
});

//using route
app.use(clientRouter);
app.use(adminRouter);