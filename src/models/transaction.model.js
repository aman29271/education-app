const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionId: {
    type: String,
    unique: true,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  amount: Number,
});
const Transaction = new mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
