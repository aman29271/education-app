const React = require('react');

// components
const Layout = require('./components/layout');
const ChangePassword = require('./components/changePassword');

const Profile = ({ data }) => {
  return (
    <Layout title="Welcome Profile">
      <link href="/css/bulma.min.css" rel="stylesheet" />
      <nav className="navbar has-background-dark">
        <div className="container">
          <div
            className="navbar-menu is-active"
            style={{ backgroundColor: 'transparent !important' }}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="/logout" className="button is-warning">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="section hero  is-fullheight has-background-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div className="box">
                  <p className="title is-spaced">Welcome {data.fullName}</p>
                  <p className="subtitle">
                    <strong>Country:</strong> {data.country}
                  </p>
                  <button className="button is-info">Payments</button>
                </div>
              </div>
              <div className="column ">
                <ChangePassword />
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="/js/student.js"></script>
    </Layout>
  );
};
module.exports = Profile;
