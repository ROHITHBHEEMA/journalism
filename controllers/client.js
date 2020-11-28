const Articles = require('../models/article');
const Authors = require('../models/author');

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
    Articles.find()
    .then(articles =>{
        res.render('client/alumni.ejs' , {
            pageTitle: 'Alumni Articles',
            path : '/alumni',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getAuthors = (req,res,next) =>{
    Authors.find()
    .then(authors =>{
        res.render('client/author.ejs' , {
            pageTitle: 'Authors',
            path : '/author',
            authors : authors
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getTech = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/tech.ejs' , {
            pageTitle: 'Tech Articles',
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getSports = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/sports.ejs' , {
            pageTitle: 'Sports Articles',
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getCult = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/cult.ejs' , {
            pageTitle: 'cult Articles',
            path : '/institute',
            articles : articles
        });
    })
    .catch(err=>{
        console.log(err);
    })
};


exports.getAuthor = (req,res,next) =>{
    const autid = req.params.authorid;
    Authors.findById(autid)
    .then(author =>{
        console.log(author);
        res.render('client/author-list.ejs' , {
            pageTitle: author.name,
            path : '/',
            author : author
        });
    })
    .catch(err=>{
        console.log(err);
    })
};
