const React = require('react');

// components
const CommonCSS = require('./components/commonCSS');
const CommonJS = require('./components/commonJS');
const Layout = require('./components/layout');
const Navbar = require('./components/navbar');

const Profile = () => {
  return (
    <Layout title="Profile">
      <CommonCSS />
      <link href="/css/user-profile.css" rel="stylesheet" />
      <Navbar isLoggedIn={true} />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto shadow my-5">
            <h1 className="text-center m-4 font-weight-bold text-info">User Profile</h1>
            <div className="border-top">
              <h4 className="text-center m-3 font-weight-bold">Upload Profile Picture</h4>
              <div className="profile-pic rounded-circle text-center m-auto">
                <i className="fas fa-camera fa-2x text-white"></i>
              </div>
            </div>
            <div className="video mx-auto my-4 border-top border-bottom text-center">
              <h4 className="text-center m-3 font-weight-bold">Upload Video</h4>
              <div className="mx-5 text-left">
                <h5>Note:</h5>
                <span>1. Introduction.</span>
                <br />
                <span>
                  2. Really which subject and G-mail Id compulsory or else you won't get calls.
                </span>
                <br />
                <span>3. About Yourself.</span>
              </div>
              <button className="btn px-5 py-2 m-3 text-center text-white">
                <i className="fas fa-video"></i>
              </button>
            </div>
            <form className="form-horizontal pl-4 pr-2" role="form">
              <div className="form-group">
                <label className="col-md-3 control-label">Name:</label>
                <div className="col-md-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">City:</label>
                <div className="col-lg-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">State:</label>
                <div className="col-lg-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Skills:</label>
                <div className="d-inline-block col-lg-8 p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Languages known:</label>
                <div className="col-lg-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Timing:</label>
                <div className="col-lg-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Instagram ID:</label>
                <div className="col-md-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Your message:</label>
                <div className="col-md-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Maximum Time(mins):</label>
                <div className="col-md-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Price:</label>
                <div className="col-md-8 d-inline-block p-0">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                  <input type="button" className="btn btn-primary" value="Save Changes" />
                  <span></span>
                  <input type="reset" className="btn btn-secondary" value="Cancel" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <CommonJS />
    </Layout>
  );
};
module.exports = Profile;
