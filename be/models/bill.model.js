const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  value: {
    type: Number,
    required: true
  },
  owner: {
    username: {
      type: String,
      required: true
    },
    billPercent: {
      type: Number
    },
    amountPaid: {
      type: Number
    }
  },
  friend: {
    username: {
      type: String,
      required: true
    },
    amountPaid: {
      type: Number
    }
  }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;