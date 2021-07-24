// MODELS Index.js
//  mongoose db configuration  //
const mongoose = require('mongoose');
const db = mongoose.connection;

//const dbUrl = ' ';
const configs = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
