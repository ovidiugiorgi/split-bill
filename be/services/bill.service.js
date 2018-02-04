const Bill = require('../models/bill.model');

exports.getBills = async (ownerId) => {
  try {
    return await Bill.find({'ownerId': ownerId});
  } catch (error) {
    throw Error('Could not get bills');
  }
};

exports.createBill = async (title, ownerId) => {
  const newBill = new Bill({
    title,
    ownerId
  });

  try {
    return await newBill.save();
  } catch (error) {
    throw error;
  }
};