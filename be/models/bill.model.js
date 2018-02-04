const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  ownerId: {
    type: String,
    required: true
  }
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;