const UserService = require('../services/user.service');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await UserService.getUsers();

    return res
      .status(200)
      .json({
        status: 200,
        data: users
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

    req.session.userId = createdUser._id;

    return res
      .status(200)
      .json({
        status: 200,
        data: user,
        message: "User successfully created"
      })
  } catch (error) {
    return res
      .status(400)
      .json({
        status: 400,
        message: error.message
      })
  }
};

exports.authUser = async (req, res, next) => {
  try {
    const authUser = await UserService.authUser(req.body.username, req.body.password);

    if (authUser) {
      req.session.userId = authUser._id;

      return res
        .status(200)
        .json({
          status: 200,
          data: authUser,
          message: "Login was successful"
        });
    } else {
      return res
        .status(400)
        .json({
          status: 400,
          message: "Login was unsuccessful"
        })
    }
  } catch (error) {
    return res
      .status(400)
      .json({
        status: 400,
        message: error.message
      })
  }
};