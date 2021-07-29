// SERVER.js
/* ===  .env  === */
//require('dotenv').config();

/* ===  external modules  === */
const express = require('express');
const methodOverride = require('method-override');
require('./config/database');
/*  const passport = require('passport');
const session = require('express-session'); */

/* ===  internal modules  === */
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const creationRouter = require('./routes/creations');
// const postRouter = require('./routes/posts');

/* ===  instanced modules  === */
const app = express();

/* ===  configuration  === */
const PORT = 4000;
app.set('view engine', 'ejs');
//require('./auth/passport');

/* ===  middleware  === */
//  body data middleware  //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  session middleware  //
/* app.use(session(
    {
        secret: "dungeon sub",
        resave: false,
        saveUninitialized: true,
    })
); */
//  passport middleware (oauth)  //
/* app.use(passport.initialize());
app.use(passport.session()); */
//  method override middleware  //
app.use(methodOverride('__method'));
//  serve public files  //
app.use(express.static('/public'));
//  will log requests  //
app.use((req, res, next) => {
    console.log(req.url, res.method);
    next();
});

/* ===  routers & controllers  === */
//  home route  //
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/show', creationRouter);
// app.use('/posts', postRouter);
//  404 route  //
app.get((req, res) => {
    res.send('404 error! Page not found');
});
app.post('/', (req, res) => {
    console.log(req.body)
  })
  
/* ===  server listener  === */
app.listen(PORT, () => {
    console.log(`Express is listening on PORT:${PORT}`);
});
