
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPost = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('BlogPost', BlogPost)
