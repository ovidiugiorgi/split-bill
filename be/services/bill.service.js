const Bill = require('../models/bill.model');

exports.getBills = async (ownerUsername) => {
  try {
    return await Bill.find({$or: [{'owner.username': ownerUsername}, {'friend.username': ownerUsername}]}, {__v: 0});
  } catch (error) {
    throw Error('Could not get bills');
  }
};

exports.createBill = async (bill) => {
  const newBill = new Bill({
    title: bill.title,
    value: bill.value,
    owner: {
      username: bill.owner.username,
      billPercent: bill.owner.billPercent,
      amountPaid: bill.owner.amountPaid
    },
    friend: {
      username: bill.friend.username,
      amountPaid: bill.friend.amountPaid
    }
  });

  try {
    return await newBill.save();
  } catch (error) {
    throw error;
  }
};