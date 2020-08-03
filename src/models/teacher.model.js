const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema(
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
    hasVerified: {
      type: Boolean,
      default: false,
    },
    activationCode: Number,
    resetPassword: {
      token: String,
      expiredAt: Date,
    },
  },
  {
    timestamps: true,
  }
);
teacherSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
