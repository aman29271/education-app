const React = require('react');

const Layout = require('./components/layout');
const ChangePassword = require('./components/changePassword');

const Teacher = ({ data }) => {
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
                  <p className="title is-spaced">
                    Welcome {data.fullName}
                  </p>
                  <p className="subtitle">
                    <strong>Location: </strong>
                    {data.city}, {data.state}
                  </p>
                  <p className="subtitle">
                    <strong>Skills:</strong> {data.skills}
                  </p>
                  <p className="subtitle">
                    <strong>Languages: </strong>
                    {data.languages}
                  </p>
                  <p className="subtitle">
                    <strong>Followers:</strong> {data.followersCount}
                  </p>
                  <p className="subtitle">
                    <strong>Message:</strong> {data.message}
                  </p>
                  <p className="subtitle">
                    <strong>Prices:</strong> {data.price} Rupees Only.
                  </p>
                  <p className="subtitle">
                    <strong>Time:</strong> {data.time} Minutes
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
      <script src="/js/teacher.js"></script>
    </Layout>
  );
};
module.exports = Teacher;
