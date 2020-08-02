const React = require('react');

// components
const CommonCSS = require('./components/commonCSS');
const CommonJS = require('./components/commonJS');
const Layout = require('./components/layout');

const Register = () => {
  return (
    <Layout title="Register Here">
      <CommonCSS />
      <link href="/css/main.css" rel="stylesheet" />

      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto shadow my-5">
            <h1 className="text-center p-4 border-bottom font-weight-bold text-info">Register</h1>

            <form className="form-horizontal px-5 py-4" role="form">
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input className="form-control" type="text" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input className="form-control" type="text" placeholder="Email ID" />
                </div>
              </div>
              <div className="form-check form-check-inline col-md-6 m-0 p-0 pl-5 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="professional"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="professional">
                  Professional
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5 col-lg-5 m-0 p-0 pl-4 mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="follower"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="follower">
                  Follower
                </label>
              </div>
              <select className="form-control mb-3" id="countryList" style={{ display: 'none' }}>
                <option> -- Select Country -- </option>
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
              <select className="form-control mb-3" id="subjectList" style={{ display: 'none' }}>
                <option> -- Select Subject -- </option>
                <option>Star</option>
                <option>Teacher</option>
                <option>Doctor</option>
                <option>Gym</option>
                <option>Yoga</option>
                <option>Chef</option>
                <option>Gamer</option>
                <option>Artist</option>
                <option>Fashion</option>
                <option>Farmer</option>
              </select>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input className="form-control" type="password" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 p-0">
                  <input className="form-control" type="password" placeholder="Confirm Password" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-12 text-center">
                  <input type="button" className="btn btn-primary" value="Register" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <script
        dangerouslySetInnerHTML={{
          __html: ` 
    document.getElementById('professional').addEventListener('click',showSubjectList);
    document.getElementById('follower').addEventListener('click',showCountryList);
    function showSubjectList() {
    const professional = document.getElementById('professional');
    const subject = document.getElementById('subjectList');
    subject.style.display = professional.checked ? 'block' : 'none';
    var country = document.getElementById('countryList');
    country.style.display = 'none';
  }

  function showCountryList() {
    var follower = document.getElementById('follower');
    var country = document.getElementById('countryList');
    country.style.display = follower.checked ? 'block' : 'none';
    var subject = document.getElementById('subjectList');
    subject.style.display = 'none';
  }`,
        }}
      />
      <CommonJS />
    </Layout>
  );
};
module.exports = Register;
