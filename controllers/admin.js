const Articles = require('../models/article');
const Author = require('../models/author');

exports.getArticle = (req,res,next) => {
    res.render('admin/add-article.ejs' , {
        pageTitle: 'Add Article',
        path : '/add-article'
    });
};

exports.postArticle = (req,res,next) => {
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
        const query = { name : result.author };
        Author.findOneAndUpdate(query,{$push:{articles : result}},function (err, author){
                if(err)
                {
                    console.log(err);
                }
        });
        
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};

exports.getAuthor = (req,res,next) => {
    res.render('admin/add-author.ejs' , {
        pageTitle: 'Add Author',
        path : '/add-author'
    });
};


exports.postAuthor = (req,res,next) => {
    const name = req.body.name;
    const shortbio = req.body.shortbio;
    const bio = req.body.bio;
    const author = new Author ({
        name : name,
        bio : bio,
        shortbio : shortbio
    })
    
    author.save()
    .then(result =>{
        res.redirect('/author');
    })
    .catch(err=>{
        console.log(err);
    });
    
};