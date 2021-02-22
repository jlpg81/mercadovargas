// const { Posts } = require('../models/models')

const mainView = async function(req, res) {
    res.send('hello market');
}

// const mainView = async function(req, res) {
//   await Posts.find(function (err, data) {
//     if (err) return console.error(err);
//     res.send(data);
//   })
// }


module.exports = {mainView}