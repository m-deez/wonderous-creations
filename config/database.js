// CONFIG database.js
//  mongoose db configuration  //
const mongoose = require('mongoose');

// const dbUrl =

mongoose.connect('mongodb://localhost:27017/wondrous-creations', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//  created by mongoose.connect  //
const db = mongoose.connection;
db.on('connected', () => {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});