const http = require('http');
const express = require('express');
const reactView = require('express-react-views');
const path = require('path');
const bodyParser = require('body-parser');

const app = new express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app
  .disable('x-powered-by')
  .set('views', path.resolve(__dirname, 'views'))
  .set('view engine', 'jsx')
  .engine('jsx', reactView.createEngine())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.resolve(__dirname, '../public')))
  .get('/', (req, res) => {
    res.render('Index');
  })
  .get('/login', (req, res) => {
    res.render('Login');
  })
  .get('/register', (req, res) => {
    res.render('Register');
  })
  .get('/profile', (req, res) => {
    res.render('Profile');
  });

server.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
