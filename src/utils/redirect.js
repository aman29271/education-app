const redirectLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/login?message=You need to first login Here.');
  }
  next();
};
const redirectHome = (req, res, next) => {
  if (req.session.userId) {
    return res.redirect('/profile');
  }
  next();
};
const redirectVerificationPage = (req, res, next) => {
  if (req.session.user) {
    if (!req.session.user.hasVerified) {
      return res.redirect('/profile/verify-code');
    }
  }
  next();
};
module.exports = { redirectLogin, redirectHome, redirectVerificationPage };
