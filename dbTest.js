// const mongoose = require('mongoose');
// require('./models/Creation');
// let Creation = mongoose.model('Creation');

// const db = mongoose.connection

// mongoose.connect('mongodb://localhost/wondrous-creations', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });

// db.on('connected', () => {
//     console.log(`Mongoose connected to:${db.host}:${db.port}`);
// });
// const creationSword = new Creation(
//     {
//         name: 'sword',
//         rarity: 'rare',
//         weaponType: 'sword',
//         damageDie: 6,
//         element: 'water',
//         elementDamage: 3,
//         armorType: 'simple',
//         armorValue: 8,
//         itemType: 'defence',
//         slot: 'arm',
//         augment: 1,
//         image: 'blah',
//         physDescription: 'rusty',
//         propertyDescription: 'none',

//         // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//     }
// )

// const creationBauble = new Creation(
//     {
//         name: 'bauble',
//         rarity: 'common',
//         weaponType: 'item',
//         damageDie: 0,
//         element: 'fire',
//         elementDamage: 3,
//         armorType: 'simple',
//         armorValue: 8,
//         itemType: 'defence',
//         slot: 'arm',
//         augment: 1,
//         image: 'blah',
//         physDescription: 'shiny',
//         propertyDescription: 'none',

//         // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//     }
// )

// creationSword.save((err) =>{
//     if (err) console.log(err)
//     else console.log('Sword saved.')
// })
// creationBauble.save((err) =>{
//     if (err) console.log(err)
//     else console.log('Bauble saved.')
// })
