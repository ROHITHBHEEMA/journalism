exports.getHome = (req,res,next) => {
    res.render('client/home.ejs' , {
        pageTitle: 'journalism body',
        path : '/'
    });
};