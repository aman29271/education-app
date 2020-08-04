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
    subject: {
      type: String,
      required: true,
    },
    followers: [{ type: Schema.Types.ObjectId, ref: 'Student', unique: true }],
    languages: String,
    skills: String,
    message: String,
    video: String,
    time: String,
    price: Number,
    city: String,
    state: String,
    instaId: String,
    payment: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
  },
  {
    timestamps: true,
  }
);
teacherSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});
teacherSchema.virtual('followersCount').get(function () {
  return this.followers.length;
});
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
