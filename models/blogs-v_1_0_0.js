const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  blog_id: {
    type: Number,
  },
  author_id: {
    type: Number,
  },
  comments: [
    {
      user_id: {
        type: Number,
      },
      comment: {
        type: String,
      },
    },
  ],
});

blogsSchema.plugin(global.db.autoIncrement, {
  model: 'blogs',
  field: 'blog_id',
  startAt: 1,
});

module.exports = mongoose.model('blogs', blogsSchema);
