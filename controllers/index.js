// CONTROLLERS index.js
let index = (req, res) => {
    res.render('index', {
        user: 'true'
    });
}

module.exports = index;