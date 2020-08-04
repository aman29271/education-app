const router = require('express').Router();

const { redirectLogin, redirectVerificationPage } = require('../utils/redirect');
const Student = require('../models/student.model');
const Teacher = require('../models/teacher.model');
const connectDb = require('../common/connect');
const routes = [redirectLogin, redirectVerificationPage];
const teacherRoute = require('./teacher.route');
const studentRoute = require('./student.route');

router.use('/teacher', teacherRoute);
router.use('/student', studentRoute);
router.route('/').get(routes, (req, res) => {
  if (req.session.student == 'false') {
    res.redirect('/profile/teacher');
  }
  if (req.session.student == 'true') {
    res.redirect('/profile/student');
  }
});

router
  .route('/verify-code')
  .get(redirectLogin, (req, res) => {
    res.render('verifyCode');
  })
  .post(redirectLogin, async (req, res) => {
    const { verificationCode } = req.body;
    if (req.session.user) {
      if (req.session.user.activationCode == verificationCode) {
        connectDb();
        try {
          if (req.session.student == 'true') {
            // student
            const student = await Student.findById(req.session.userId).exec();
            student.hasVerified = true;
            await student.save();
          }
          if (req.session.student == 'false') {
            // teacher
            const teacher = await Teacher.findById(req.session.userId).exec();
            teacher.hasVerified = true;
            await teacher.save();
          }
        } catch (err) {
          if (err) return res.status(200).json({ error: err });
        }

        req.session.user.hasVerified = true;
        return res.redirect('/profile');
      } else {
        // incorrect verification code
        // redirect to /profile/verify-code
        return res.redirect('/profile/verify-code');
      }
    }
    res.redirect('/');
  });

module.exports = router;
