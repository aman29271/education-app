const bcrypt = require('bcryptjs');

const connectDb = require('../common/connect');

function changePassword(User) {
  return async (req, res) => {
    const { confirm_password, new_password, current_password } = req.body;
    if (new_password !== confirm_password) {
      return res.status(200).json({ message: 'New Password Dont Match', error: true });
    }
    connectDb();
    const user = await User.findById(req.session.userId, '+password');
    if (user) {
      const isMatched = await bcrypt.compare(current_password, user.password);
      if (isMatched) {
        // password matched
        const BCRYPT_SALT_ROUND = 12;
        const hashedPassword = await bcrypt.hash(new_password, BCRYPT_SALT_ROUND);
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json({ message: 'Password has been changed', error: false });
      } else {
        // password don't match
        return res.status(200).json({ message: "Password don't match", error: true });
      }
    } else {
      // no user exist
      return res.status(200).json({ message: "Password doesn't exist.", error: true });
    }
  };
}
module.exports = { changePassword };
