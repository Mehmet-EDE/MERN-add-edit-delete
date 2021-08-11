const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const denemeSchema = new Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
        minlength:5
    },
    surname:{
        type:String,
        required:true,
        trim:true,
        minlength:5
    },
    email:{
        type:String,
        required: true,
        minlength:5,
        unique:true,
    },
    photo:{
        type:String,
        required:false,
    },
    hiringdate:{
        type:String,
        required:true
    }

});
module.exports= mongoose.model('Person', denemeSchema);
