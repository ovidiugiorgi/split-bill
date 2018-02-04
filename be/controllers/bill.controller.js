const BillService = require('../services/bill.service');
const UserService = require('../services/user.service');

exports.getBills = async (req, res, next) => {
  const authUser = await UserService.getUserById(req.session.userId);

  if (authUser) {
    try {
      const bills = await BillService.getBills(authUser.username);

      return res
        .status(200)
        .json({
          status: 200,
          data: bills
        });
    } catch (error) {
      return res
        .status(400)
        .json({
          status: 400,
          message: "Could not retrieve bills"
        });
    }
  } else {
    return res
      .status(401)
      .json({
        status: 401,
        message: "Not authorized to get bills"
      });
  }
};

exports.createBill = async (req, res, next) => {
  const authUser = await UserService.getUserById(req.session.userId);

  if (authUser) {
    try {
      const bill = {
        title: req.body.title,
        value: req.body.value,
        owner: {
          username: authUser.username,
          billPercent: req.body.percent || 50,
          amountPaid: 0
        },
        friend: {
          username: req.body.friendUsername,
          amountPaid: 0
        }
      };
      const createdBill = await BillService.createBill(bill, authUser._id);

      return res
        .status(200)
        .json({
          status: 200,
          data: createdBill,
          message: "Bill successfully created"
        });
    } catch (err) {
      return res
        .status(400)
        .json({
          status: 400,
          message: err.message
        });
    }
  } else {
    return res
      .status(401)
      .json({
        status: 401,
        message: "Not authorized to create bill"
      });
  }

};