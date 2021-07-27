const mongoose = require('mongoose');
require('./models/Creation');
let Creation = mongoose.model('Creation');

const db = mongoose.connection

mongoose.connect('mongodb://localhost/wondrous-creations', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

db.on('connected', () => {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});
const creationSword = new Creation(
    {
        name: { type: 'Sword', required: true },
        // rarity: { type: String, required: false },
        // weaponType: { type: String, required: false },
        // damageDie: { type: 6, required: false },
        // element: { type: String, required: false },
        // elementDamage: { type: Number, required: false },
        // armorType: { type: String, required: false },
        // armorValue: { type: Number, required: false },
        // itemType: { type: String, required: false },
        // slot: { type: String, required: false },
        // augment: { type: Number, required: false },
        // image: { type: String, required: false },
        // physDescription: { type: String, required: false },
        // propertyDescription: { type: String, required: false },

        // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    }
)

const creationBauble = new Creation(
    {
        name: { type: 'item', required: true },
        // rarity: { type: String, required: false },
        // weaponType: { type: String, required: false },
        // damageDie: { type: Number, required: false },
        // element: { type: String, required: false },
        // elementDamage: { type: Number, required: false },
        // armorType: { type: String, required: false },
        // armorValue: { type: Number, required: false },
        // itemType: { type: String, required: false },
        // slot: { type: String, required: false },
        // augment: { type: Number, required: false },
        // image: { type: String, required: false },
        // physDescription: { type: 'it is an item.', required: false },
        // propertyDescription: { type: String, required: false },

        // posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    }
)

creationSword.save((err) =>{
    if (err) console.log(err)
    else console.log('Sword saved.')
})
creationBauble.save((err) =>{
    if (err) console.log(err)
    else console.log('Bauble saved.')
})
