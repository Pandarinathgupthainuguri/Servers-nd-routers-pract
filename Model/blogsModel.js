// const {Schema, default: mongoose} = require('mongoose')

// const blogSchema = new Schema({
//     title : {
//      type : String,
//     required:true,
//     trim:true
//   },
//   content:{
//     type:String,
//     required:true,
//   },
//   author:{
//     type: String,
//     required:true
//   },  
// })
// module.exports = mongoose.model('Blogs',blogSchema);
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
}, { collection: 'learn' }); // 👈 this sets the collection name

module.exports = mongoose.model('Blog', blogSchema);
