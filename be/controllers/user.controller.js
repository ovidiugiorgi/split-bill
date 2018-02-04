const UserService = require('../services/user.service');

exports.getUsers = async (req, res, next) => {
  const page = req.query.page ? req.query.page : 1;
  const limit = req.query.limit ? req.query.limit : 10;

  try {
    const users = await UserService.getUsers({}, page, limit);

    return res
      .status(200)
      .json({
        status: 200,
        data: users,
        message: "Users successfully retrieved"
      });
  } catch (error) {
    return res
      .status(400)
      .json({
        status: 400,
        message: "Could not retrieve users"
      });
  }
};

exports.createUser = async (req, res, next) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  try {
    const createdUser = await UserService.createUser(user);

    return res
      .status(200)
      .json({
        status: 200,
        data: createdUser,
        message: "User successfully created"
      })
  } catch (error) {
    return res
      .status(400)
      .json({
        status: 400,
        message: "User creation was unsuccessful"
      })
  }
};