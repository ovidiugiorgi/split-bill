const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;