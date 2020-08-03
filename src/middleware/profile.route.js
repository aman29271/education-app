const router = require('express').Router();

const { redirectLogin, redirectVerificationPage } = require('../utils/redirect');

router.route('/').get(redirectLogin, redirectVerificationPage, (req, res) => {
  res.render('Profile');
});
router.route('/verify-code').get(redirectLogin, (req, res) => {
  res.render('verifyCode');
});
module.exports = router;
