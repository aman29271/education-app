const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');
const connectDb = require('../common/connect');

const { redirectHome } = require('../utils/redirect');

router.route('/').get(redirectHome, (req, res) => {
  const { message } = req.query;
  res.render('Login', { message });
});

router.route('/verify').post(redirectHome, (req, res) => {
  const { username, password, student } = req.body;
  connectDb();
  let person = '';
  if (student === 'true') {
    // student verification
    person = Student;
  }
  if (student === 'false') {
    // teacher verification
    person = Teacher;
  }
  person.findOne(
    { email: username },
    'email activationCode hasVerified +password',
    async (err, user) => {
      if (err) {
        res.status(200).json({ message: 'An Error Ocurred.', full_description: err });
      }
      if (user) {
        const isMatched = await bcrypt.compare(password, user.password);
        if (isMatched) {
          req.session.userId = user._id;
          req.session.user = user;
          req.session.student = student;
          delete req.session.user.password;
          res.redirect('/profile');
        } else {
          res.redirect('/login?message=User or password is not correct.');
        }
      } else {
        res.redirect('/login?message=User or password is not correct.');
      }
    }
  );
});
module.exports = router;
