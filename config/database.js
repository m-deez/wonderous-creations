// CONFIG database.js
//  mongoose db configuration  //
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ut-prosim:dung30nSubDandD@cluster0.maab0.mongodb.net/wondrous-creations?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

//  created by mongoose.connect  //
const db = mongoose.connection;
db.on('connected', () => {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});