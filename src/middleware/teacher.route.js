const router = require('express').Router();

const { redirectLogin, redirectVerificationPage } = require('../utils/redirect');
const Teacher = require('../models/teacher.model');
const connectDb = require('../common/connect');
const routes = [redirectLogin, redirectVerificationPage];
const { changePassword } = require('./common.route');

router.route('/').get(routes, strictStudent, async (req, res) => {
  connectDb();
  try {
    const teacher = await Teacher.findById(req.session.userId).exec();
    if (checkformFilled(teacher).isFilled) {
      return res.render('TeacherProfile', { isFilled: true, data: teacher });
    } else {
      res.render('TeacherProfile', { isFilled: false });
    }
  } catch (err) {
    if (err) return res.status(200).json({ error: err });
  }
});
router.route('/verify').post(routes, strictStudent, async (req, res) => {
  const { city, state, skills, languages, time, price, instaId, message } = req.body;
  connectDb();
  try {
    const teacher = await Teacher.findById(req.session.userId).exec();
    teacher.city = city;
    teacher.state = state;
    teacher.skills = skills;
    teacher.languages = languages;
    teacher.time = time;
    teacher.price = price;
    teacher.instaId = instaId;
    teacher.message = message;
    await teacher.save();
    console.log(req.body);
    return res.redirect('/profile');
  } catch (err) {
    if (err) return res.status(200).json({ error: err });
  }
});
router.route('/settings/change-password').post(routes, strictStudent, changePassword(Teacher));

function checkformFilled(obj) {
  if (obj.city !== '') {
    return { isFilled: true };
  } else {
    return { isFilled: false };
  }
}

function strictStudent(req, res, next) {
  if (req.session.student == 'true') {
    return res.redirect('/profile/student');
  }
  next();
}

module.exports = router;
