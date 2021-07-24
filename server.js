// SERVER.js
/* ===  .env  === */
require('dotenv').config();

/* ===  external modules  === */
const express = require('express');
const methodOverride = require('method-override');

/* ===  internal modules  === */



/* ===  instanced modules  === */
const app = express();

/* ===  configuration  === */
const PORT = 4000;
app.set('view engine', 'ejs');
require('./auth/passport');

/* ===  middleware  === */
//  body data middleware  //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  session middleware  //
const session = require('express-session');
app.use(session({
    secret: "dungeon sub",
    resave: false,
    saveUninitialized: true,
})
);
//  passport middleware (oauth)  //
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
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
app.get('/', (req, res) => {
    res.render('index');
});
//  404 route  //
app.get((req, res) => {
    res.send('404 error! Page not found');
});

/* ===  server listener  === */
app.listen(PORT, () => {
    console.log(`Express is listening on PORT:${PORT}`);
});