const React = require('react');

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 shadow d-flex justify-content-between align-items-center">
      <a className="navbar-brand ml-4" href="#">
        Logo
      </a>
      <button className="btn btn-warning p-2 mr-4 text-white font-weight-bold">
        {isLoggedIn ? <a href="/logout">Logout</a> : <a href="/login">LOGIN</a>}
      </button>
    </nav>
  );
};
module.exports = Navbar;
