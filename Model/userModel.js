const mongoose = require('mongoose');

const userData  = new mongoose.Schema({
     
    name:{
        type : String,
        required : true,
        trim : true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password : {
        type:true,
        required:true,
    },
    createdAt : {
        type: Date(),
        default: Date.now,
    }
})
const user = mongoose.model('User',userData)
module.exports = user; 