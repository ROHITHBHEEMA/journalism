const Trending = require('../models/add-trending');

exports.getTrending = (req,res,next) => {
    res.render('admin/add-trending.ejs' , {
        pageTitle: 'Add Trending Articles',
        path : '/add-trending'
    });
};

exports.postTrending = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const date = req.body.date;
    const description = req.body.description;
    const month = req.body.month;

    const trending = new Trending ({
        title : title,
        imageUrl : imageUrl,
        date : date,
        description : description,
        month : month
    })
    
    trending.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};