const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    country: {
      type: String,
      required: true,
    },
    activationCode: Number,
    hasVerified: {
      type: Boolean,
      default: false,
    },
    resetPassword: {
      token: String,
      expiredAt: Date,
    },
    payment: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
      },
    ],
  },
  { timestamps: true }
);
studentSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});
studentSchema.virtual('followingCount').get(function () {
  return this.following.length;
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
