const React = require('react');

const TeacherCard = ({ data }) => {
  const {
    name,
    country,
    followers,
    gmail,
    time,
    price,
    location,
    languages,
    skills,
    messages,
  } = data;
  return (
    <div className="card p-2 m-5 d-flex flex-row shadow">
      <div className="col-md-3 border-right">
        <img className="card-img-top" src="images/teacher.png" alt="Card image cap" />
        <h3 className="text-center mt-2 font-weight-bold">Teacher Name</h3>
        <h4 className="text-center mt-2 font-weight-bold">Country</h4>
      </div>
      <div className="card-body col-md-6 pb-0 pt-2">
        <ul className="teacher-info list-unstyled list-inline mb-0">
          <li>
            <strong>Name:</strong> {name ? name : 'Teacher Name'}
          </li>
          <li>
            <strong>Country:</strong>
            {country ? country : 'County Name'}
          </li>
          <li>
            <strong>Followers:</strong> {followers ? followers : 4}
          </li>
          <li>
            <strong>Gmail:</strong>
            {gmail ? gmail : 'teachername@gmail.com'}
          </li>
          <li>
            <strong>Time:</strong> {time ? time : '15 minutes'}
          </li>
          <li>
            <strong>Price:</strong> {price ? price : 'Rs.100'}
          </li>
          <li>
            <strong>Location:</strong>
            {location ? location : 'Bangalore, Chennai'}
          </li>
          <li>
            <strong>Languages:</strong> {languages ? languages : 'Tamil, English'}
          </li>
          <li>
            <strong>Skills:</strong> {skills ? skills : 'Skillone, Skilltwo, Skillthree'}
          </li>
          <li className="list-inline-item">
            <button className="btn btn-warning p-2 mt-2 mr-2 mb-0">Message from teacher</button>
            <button className="btn btn-info p-2 mt-2 mr-2 mb-0">Video call</button>
          </li>
        </ul>
      </div>
      <div className="col-md-3 d-flex flex-column align-items-end p-3">
        <ul className="list-inline list-unstyled">
          <li className="list-inline-item m-1">
            <i className="far fa-star"></i>
          </li>
          <li className="list-inline-item m-1">
            <i className="far fa-star"></i>
          </li>
          <li className="list-inline-item m-1">
            <i className="far fa-star"></i>
          </li>
          <li className="list-inline-item m-1">
            <i className="far fa-star"></i>
          </li>
          <li className="list-inline-item m-1">
            <i className="far fa-star"></i>
          </li>
        </ul>
        <button className="btn btn-outline-warning px-3 py-2 mr-2">Follow</button>
        <ul className="list-inline list-unstyled mt-4">
          <li className="list-inline-item m-1">
            <button type="button" className="btn btn-secondary">
              <i className="fab fa-google"></i>
            </button>
          </li>
          <li className="list-inline-item m-1">
            <button type="button" className="btn btn-secondary">
              <i className="fab fa-instagram"></i>
            </button>
          </li>
          <li className="list-inline-item m-1">
            <button type="button" className="btn btn-secondary">
              <i className="fab fa-facebook-f fa-1x"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
module.exports = TeacherCard;
