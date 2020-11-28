const mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
const article = require('./article')
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    shortbio:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    articles:[{
        
            type : Schema.Types.ObjectId,
            ref : 'article'

         }]
        
   
});

module.exports= mongoose.model('Author',authorSchema);