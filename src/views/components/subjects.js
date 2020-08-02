const React = require('react');

const Subjects = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 shadow">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <img src="images/subject1.svg" />
              SUBJECT1<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject2.svg" />
              SUBJECT2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject3.svg" />
              SUBJECT3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject4.svg" />
              SUBJECT4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject5.svg" />
              SUBJECT5
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject6.svg" />
              SUBJECT6
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject7.svg" />
              SUBJECT7
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject8.svg" />
              SUBJECT8
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject9.svg" />
              SUBJECT9
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="images/subject10.svg" />
              SUBJECT10
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

module.exports = Subjects;
