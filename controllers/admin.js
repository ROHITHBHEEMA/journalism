const Articles = require('../models/article');

exports.getTrending = (req,res,next) => {
    res.render('admin/add-trending.ejs' , {
        pageTitle: 'Add Trending Articles',
        path : '/add-trending'
    });
};

exports.postTrending = (req,res,next) => {
    const title = req.body.title;
    const image = req.body.image;
    const date = req.body.date;
    const description = req.body.description;
    const month = req.body.month;
    const year = req.body.year;
    const category = req.body.category;
    const author = req.body.author;
    const trending = req.body.trending;
    const shortdescription = req.body.shortdescription;

    const article = new Articles ({
        title : title,
        image : image,
        date : date,
        description : description,
        month : month,
        shortdescription : shortdescription,
        year : year,
        category : category,
        author : author,
        trending : trending

    })
    
    article.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};