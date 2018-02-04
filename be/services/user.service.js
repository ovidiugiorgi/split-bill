const User = require('../models/user.model');

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
    throw Error("Could not create user");
  }
};