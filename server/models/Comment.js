const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  text: { type: String, require: true },
  BlogPost: {type: Schema.Types.ObjectId, ref: 'BlogPost'}
})

module.exports = mongoose.model('Comment', Comment)
