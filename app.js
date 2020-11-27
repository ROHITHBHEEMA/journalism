const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRouter = require('./routes/client');
const adminRouter = require('./routes/admin');

const app = express();


//views
app.set('view engine', 'ejs');
app.set('views', 'views');

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//public
app.use(express.static(path.join(__dirname, 'public')));

//using route
app.use(clientRouter);
app.use(adminRouter);

mongoose.connect('mongodb+srv://rohith:13vF7uFZWb24IXoM@cluster0.ayzod.mongodb.net/journal?retryWrites=true&w=majority')
.then(result => {
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
});