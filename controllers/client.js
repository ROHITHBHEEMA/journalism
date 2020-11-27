const Trending = require('../models/add-trending');

exports.getHome = (req,res,next) => {
    Trending.find()
    .then(articles =>{
        res.render('client/home.ejs' , {
            pageTitle: 'journalism body',
            path : '/',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};