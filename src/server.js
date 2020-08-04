const http = require('http');
const express = require('express');
const reactView = require('express-react-views');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const app = new express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const secret = process.env.SECRET || 'hello brother';
const secure = process.env.NODE_ENV === 'production';
const registerRoute = require('./middleware/register.route');
const profileRouter = require('./middleware/profile.route');
const loginRoute = require('./middleware/login.route');
const connectDb = require('./common/connect');

connectDb();
app
  .disable('x-powered-by')
  .set('views', path.resolve(__dirname, 'views'))
  .set('view engine', 'jsx')
  .engine('jsx', reactView.createEngine())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(express.static(path.resolve(__dirname, '../node_modules/bulma')))
  .use(express.static(path.resolve(__dirname, '../public')))
  .use(cookieParser())
  .use(
    session({
      name: 'sid',
      secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  .get('/', (req, res) => {
    if (req.session.userId) {
      return res.render('Index', { isLoggedIn: true });
    }
    res.render('Index', { isLoggedIn: false });
  })
  .use('/login', loginRoute)
  .use('/register', registerRoute)
  .use('/profile', profileRouter)
  .get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/profile');
      }
      res.redirect('/');
    });
  });

server.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
