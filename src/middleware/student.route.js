const router = require('express').Router();

const { redirectLogin, redirectVerificationPage } = require('../utils/redirect');
const Student = require('../models/student.model');
const connectDb = require('../common/connect');
const routes = [redirectLogin, redirectVerificationPage];
const { changePassword } = require('./common.route');

router.route('/').get(routes, strictTeacher, async (req, res) => {
  connectDb();
  try {
    const student = await Student.findById(req.session.userId).exec();
    return res.render('StudentProfile', { data: student });
  } catch (err) {
    if (err) return res.status(200).json({ error: err });
  }
});

router.route('/settings/change-password').post(routes, strictTeacher, changePassword(Student));

function strictTeacher(req, res, next) {
  if (req.session.student == 'false') {
    return res.redirect('/profile/teacher');
  }
  next();
}
module.exports = router;
