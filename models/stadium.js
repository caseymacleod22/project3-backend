const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stadiumSchema = new Schema({
    stadiumName: String,
    location: String,
    beenThere: Boolean,
}, {timestamps: true})


module.exports = mongoose.model('Stadium', stadiumSchema)