const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  user_id: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    index: true,
    trim: true,
  },
  password: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
  },
});

usersSchema.plugin(global.db.autoIncrement, {
  model: 'users',
  field: 'user_id',
  startAt: 1,
});

module.exports = mongoose.model('users', usersSchema);
