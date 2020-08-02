const React = require('react');

// components
const CommonCSS = require('./components/commonCSS');
const CommonJS = require('./components/commonJS');
const Layout = require('./components/layout');

const Login = () => {
  return (
    <Layout title="Login Here">
      <CommonCSS />
      <link href="/css/main.css" rel="stylesheet" />

      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          <div className="login-form col-md-4 col-lg-4 shadow p-2 text-center border">
            <h2 className="text-center font-weight-bold mb-3 py-1 bg-light text-info">Login</h2>
            <form className="form-horizontal px-1" role="form">
              <div className="form-group">
                <div className="col-md-12">
                  <input className="form-control" type="text" placeholder="Username" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12">
                  <input className="form-control" type="password" placeholder="Password" />
                </div>
              </div>
              <input type="button" className="btn btn-success" value="Submit" />
            </form>
            <div
              className="form-check d-flex justify-content-between align-items-center border-bottom"
              style={{ padding: '15px', fontSize: '14px' }}
            >
              <div>
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
                <input type="checkbox" className="form-check-input ml-2" id="exampleCheck1" />
              </div>
              <div>
                <a href="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div
              className="text-center m-0 py-2"
              style={{ fontSize: '14px', letterSpacing: '0.5px' }}
            >
              <p className="mb-0">
                Don't have an account?
                <a href="/register" className="text-decoration-none">
                  Create Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CommonJS />
    </Layout>
  );
};
module.exports = Login;
