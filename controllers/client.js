const Articles = require('../models/article');
const Authors = require('../models/author');
const Users = require('../models/user');

//start of user
require('dotenv').config();
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const findOrCreate = require('mongoose-findorcreate');


passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        if (err)
              return done(err);
          else if (user) {
              console.log('user');
              return done(null, user);
          } 
          else {
              console.log('ELSE');
              User.insertOne({
              "googleid" : profile.id,
              "token" : token,
              "name"  : profile.displayName,
              "email" : profile.emails[0].value,
              "photo" : profile.photos[0].value
              })
              console.log(profile.emails[0].value);
              return done(null, user);
            }
    //   return cb(err, user);
    });
  }
));

exports.getLogin = (req,res,next)=>{
    passport.authenticate('google', { scope : ['profile', 'email'] });
}

exports.getCall = (req,res,next)=>{
    passport.authenticate('google', {
        failureRedirect: '/auth/google'
    }) ,
      (req, res) => {
          console.log("login done");
          res.redirect('/');
      }
}
// app.get('/auth/google/callback', 
//       passport.authenticate('google', {
//           failureRedirect: '/auth/google'
//       }) ,
//         (req, res) => {
//             console.log("login done");
//             res.redirect('/');
//         }
//   );
// app.get('/auth/google', 
//     passport.authenticate('google', { scope : ['profile', 'email'] })
//   );


////end of user 

exports.getHome = (req,res,next) => {
    Articles.find()
    .then(articles =>{
        res.render('client/home.ejs' , {
            pageTitle: 'journalism body',
            path : '/',
            user: req.User,
            isLogged: req.isAuthenticated(),
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
            user: req.User,
            isLogged: req.isAuthenticated(),
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
        user: req.User,
        isLogged: req.isAuthenticated(),
        path : '/about',
    });
};


exports.getAlumni = (req,res,next) =>{
    Articles.find()
    .then(articles =>{
        res.render('client/alumni.ejs' , {
            pageTitle: 'Alumni Articles',
            path : '/alumni',
            user: req.User,
            isLogged: req.isAuthenticated(),
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
            user: req.User,
        isLogged: req.isAuthenticated(),
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
            user: req.User,
        isLogged: req.isAuthenticated(),
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
            user: req.User,
        isLogged: req.isAuthenticated(),
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
            user: req.User,
        isLogged: req.isAuthenticated(),
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
    // Authors.
    //   findOne({ _id: autid }).
    //   populate('Authors.articles').
    //   exec(function (err, story) {
    //     if (err)
    //     {
    //         console.log(err);
    //     }
    //     console.log(story.articles[1].title);
        
    //   });

    Authors.findById(autid)
    .then(author =>{
        // console.log(author);
        res.render('client/author-list.ejs' , {
            pageTitle: author.name,
            path : '/',
            user: req.User,
        isLogged: req.isAuthenticated(),
            author : author
        });
    })
    .catch(err=>{
        console.log(err);
    })
};
