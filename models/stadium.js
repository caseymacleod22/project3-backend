const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stadiumSchema = new Schema({
    stadiumName: String,
    location: String,
}, {timestamps: true})


module.exports = mongoose.model('Stadium', stadiumSchema)