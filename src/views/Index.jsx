const React = require('react');

// components
const CommonCSS = require('./components/commonCSS');
const CommonJS = require('./components/commonJS');
const Navbar = require('./components/navbar');
const Subjects = require('./components/subjects');
const TeacherList = require('./components/teacherList');
const Layout = require('./components/layout');

const Index = () => {
  return (
    <Layout>
      <CommonCSS />
      <link href="/css/main.css" rel="stylesheet" />

      <Navbar isLoggedIn={false} />
      <Subjects />
      <div className="container">
        <TeacherList data={[1]} />
      </div>
      <CommonJS />
    </Layout>
  );
};
module.exports = Index;
