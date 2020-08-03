const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { redirectHome } = require('../utils/redirect');
const connectDb = require('../common/connect');
const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');
const send = require('../utils/mailer');
const queryString = require('querystring');

router.route('/').get(redirectHome, (req, res) => {
  const { msg, message } = req.query;
  res.render('Register', { errors: { msg }, message });
});
router.route('/verify').post(redirectHome, async (req, res) => {
  const { firstName, lastName, email, password, confirm_password, country } = req.body;
  const errors = { msg: [] };
  if (password !== confirm_password) {
    errors.msg.push('Password do not match.');
  }
  if (password.length < 6) {
    errors.msg.push('Password must have six character.');
  }
  if (firstName.length < 3 || lastName.length < 3) {
    errors.msg.push('Name must have at least three character.');
  }
  if (errors.msg.length > 0) {
    const data = queryString.stringify(errors);
    return res.redirect(`/register?${data}`);
  }

  connectDb();
  const BCRYPT_SALT_ROUND = 12;
  const number = Math.floor(100000 + Math.random() * 900000);
  const body = `Thanks for registering with us. Please note your verification code for login. Your verification code is ${number}`;
  let person = '';
  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUND);
  if (country !== '') {
    // student registration
    person = new Student({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      country,
      activationCode: number,
    });
  }
  // teacher registration

  person = new Teacher({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    activationCode: number,
  });
  await person.save();
  send('admin@example.com', email, 'Thanks for registering with us.', body);
  res.redirect('/register?message=' + 'You have successfully registered.');
});
module.exports = router;
