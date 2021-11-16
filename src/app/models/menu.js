const mongoose = require('mongoose');
const { Schema } = mongoose;
const menuSchama = new Schema({
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    size: { type: String, require: true }
})
module.exports = mongoose.model('menu', menuSchama);