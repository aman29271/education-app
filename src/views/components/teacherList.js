const React = require('react');

const TeacherCard = require('./teacherCard');

const TeacherList = ({ data }) => {
  return data.map((teacher) => {
    return <TeacherCard data={teacher} key={teacher} />;
  });
};
module.exports = TeacherList;
