const Creation = require("../../models/Creation");
const updateCreation = document.querySelector('#update-button');
const deleteButton = documant.querrySelector('#delete-button');

updateCreation.addEventListener('click', _ => {
    fetch('/details', {
        method: 'put',
        headers: { 'Content-Type': 'application/jason' },
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        console.log(response)
    })
})

app.put('/details', (req, res) => {
    Creation.findOneAndUpdate(
        { name: `${creation.name}` },
        { 
            $set: {
                name: req.body.name,
                rarity: req.body.rarity,
                element: req.body.elememt,
                elementDamage: req.body.elememtDamage,
                augment: req.body.augment,
                physDescription: req.body.physDescription,
                propertyDescription: req.body.propertyDescription,
            }
        },
        {
            upsert: true,
        },
    )
    .then(result => {
        res.json('Success');
    })
    .catch(error => console.error(error))
})

deleteButton.addEventListener('click', _ => {
    fetch('/details', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: `${creation.name}`,
        })
    })
    .then(res => {
        if (res.ok) return res.jason();
    })
    .then(data => {
        window.location.reload();
    })
})

creations.deleteOne(
    { name: `${creation.name}` },

)