const React = require('react');

const ChangePassword = () => {
  return (
    <div className="box">
      <p className="title has-text-centered is-spaced">Change Password</p>
      <p className="subtitle has-text-centered has-text-danger is-hidden" id="danger"></p>
      <p className="subtitle has-text-centered has-text-success is-hidden" id="success"></p>
      <form name="change_password" id="change_password">
        <div className="field is-horizontal">
          <div className="field-label is-normal has-text-left">
            <label className="label">Current</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  id="current_password"
                  name="current_password"
                  minLength="6"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal has-text-left">
            <label className="label">New </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  id="new_password"
                  name="new_password"
                  minLength="6"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal has-text-left">
            <label className="label">Confirm</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  id="confirm_password"
                  minLength="6"
                  name="confirm_password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal has-text-left">
            <label className="label"></label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-link" id="change">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
module.exports = ChangePassword;
