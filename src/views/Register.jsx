const React = require('react');

// components
const CommonCSS = require('./components/commonCSS');
const Layout = require('./components/layout');

const Register = ({ errors, message }) => {
  return (
    <Layout title="Register Here">
      <CommonCSS />
      <link href="/css/main.css" rel="stylesheet" />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto shadow my-5">
            <h1 className="text-center p-4 border-bottom font-weight-bold text-info">Register</h1>
            {errors.msg
              ? errors.msg.map((msg) => (
                  <p style={{ color: 'red' }} className="text-center" key={msg}>
                    {msg}
                  </p>
                ))
              : null}
            {message ? (
              <p style={{ color: 'green' }} className="text-center">
                {message} <a href="/login">Login Here</a>
              </p>
            ) : null}
            <p style={{ color: 'red', display: 'none' }} id="message" className="text-center"></p>
            <form
              className="form-horizontal px-5 py-4"
              role="form"
              method="post"
              action="/register/verify"
            >
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="form-check form-check-inline col-md-6 m-0 p-0 pl-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="professional"
                  name="category"
                  value="teacher"
                />
                <label className="form-check-label" htmlFor="professional">
                  Teacher
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5 col-lg-5 m-0 p-0 pl-4 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  id="follower"
                  name="category"
                  value="student"
                />
                <label className="form-check-label" htmlFor="follower">
                  Student
                </label>
              </div>
              <select
                className="form-control mb-3"
                id="subjectList"
                style={{ display: 'none' }}
              >
                <option> -- Select Subject -- </option>
                <option>Subject1</option>
                <option>Subject2</option>
                <option>Subject3</option>
                <option>Subject4</option>
                <option>Subject5</option>
                <option>Subject6</option>
                <option>Subject7</option>
                <option>Subject8</option>
                <option>Subject9</option>
                <option>Subject10</option>
              </select>
              <select
                className="form-control mb-3"
                id="countryList"
                style={{ display: 'none' }}
              >
                <option>-- Select Country --</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Germany</option>
                <option>India</option>
                <option>Japan</option>
                <option>Malaysia</option>
                <option>Singapore</option>
                <option>United Arab Emirates</option>
                <option>United Kingdom</option>
                <option>United States</option>
              </select>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                    minLength="6"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input
                    className="form-control"
                    type="password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    required
                    minLength="6"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 text-center">
                  <input type="submit" className="btn btn-primary" value="Register" id="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <script src="/js/register.js"></script>
    </Layout>
  );
};
module.exports = Register;
