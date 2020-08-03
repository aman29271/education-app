const React = require('react');

const Layout = require('./components/layout');

const VerifyCode = () => {
  return (
    <Layout title="Verification Needed">
      <link href="/css/bulma.min.css" rel="stylesheet" />
      <nav className="navbar is-fixed-top" style={{ backgroundColor: 'transparent !important' }}>
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
              <div className="column is-6-desktop is-8-tablet  is-offset-3-desktop is-offset-2-tablet">
                <div className="box">
                  <p className="title has-text-centered is-spaced">Enter your verification code</p>
                  <form method="post" action="/profile/verify-code">
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          minLength="6"
                          maxLength="6"
                          name="verificationCode"
                          placeholder="123456"
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button is-link">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
module.exports = VerifyCode;
