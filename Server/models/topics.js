var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var topicSchema = new mongoose.Schema({
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  postedOn: String,
  updatedOn: String,
  title: String,
  description: String,
  postedByEmail: String,
  category: String,
  subcategory: String,
  tags: [String],
  likes: Number,
  liked_by: [String],
  comments: [{
    commentedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    commentedOn: String,
    commentText: String,
    likes: Number
  }],
  answers: [{
    answeredBy: { type: Schema.Types.ObjectId, ref: 'User' },
    answeredOn: String,
    answerText: String,
    likes: Number,
    answerComments: [{
      commentedBy: { type: Schema.Types.ObjectId, ref: 'User' },
      commentedOn: String,
      commentText: String,
      likes: Number
    }]
  }]
  });

module.exports = mongoose.model('Topics', topicSchema, 'Topics');