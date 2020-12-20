const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const Schema = mongoose.Schema;
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema ({
    
    googleid:{
        type:String
    },
    token:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    photo:{
        type:String
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
// articleSchema.plugin(require('mongoose-autopopulate'));
module.exports= mongoose.model('User',userSchema);