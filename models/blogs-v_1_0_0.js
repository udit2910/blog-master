const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  blog_id: {
    type: Number,
  },
  author_id: {
    type: Number,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  comments: [
    {
      comment_by: {
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
