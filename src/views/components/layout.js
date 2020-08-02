const React = require('react');

const Layout = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{title ? title : 'Education'}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
module.exports = Layout;
