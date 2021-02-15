const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  user_id: {
    type: Number,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
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
