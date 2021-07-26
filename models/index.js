// MODELS index.js
//  mongoose db configuration  //
const mongoose = require('mongoose');

// const dbUrl = 'mongodb://localhost:27017/wondrous-creations';

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//  created by mongoose.connect  //
const db = mongoose.connection;
db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

module.exports = index;