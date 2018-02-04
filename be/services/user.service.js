const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.getUsers = async (query, page, limit) => {
  const options = {
    page,
    limit
  };

  try {
    return await User.paginate(query, options);
  } catch (error) {
    throw Error('Could not get users');
  }
};

exports.createUser = async (user) => {
  const newUser = new User({
    username: user.username,
    password: user.password
  });

  try {
    return await newUser.save();
  } catch (error) {
    throw error;
  }
};

exports.authUser = async (username, password) => {
  try {
    const user = await User.findOne({'username': username});

    const result = await bcrypt.compare(password, user.password);

    return result ? user : false;
  } catch (err) {
    throw err;
  }
};