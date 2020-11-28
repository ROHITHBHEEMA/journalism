const Articles = require('../models/article');

exports.getHome = (req,res,next) => {
    Articles.find()
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

exports.getArticle = (req,res,next) =>{
    const artid = req.params.articleid;
    Articles.findById(artid)
    .then(article =>{
        console.log(article);
        res.render('client/article.ejs' , {
            pageTitle: article.title,
            path : '/',
            article : article
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getAbout = (req,res,next) =>{
    res.render('client/about.ejs' , {
        pageTitle: 'About',
        path : '/about',
    });
};


exports.getAlumni = (req,res,next) =>{
    res.render('client/alumni.ejs' , {
        pageTitle: 'Alumni Articles',
        path : '/alumni',
    });
};

exports.getAuthor = (req,res,next) =>{
    res.render('client/author.ejs' , {
        pageTitle: 'Authors',
        path : '/author',
    });
};