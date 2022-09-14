const mongoose = require('mongoose');

//  Your code goes here
mongoose.connect(('mongodb://localhost/mario'))

const Schema = mongoose.Schema;

const marioSchema = new Schema({
    name : String ,
    weight : Number
})

const marioModel = mongoose.model('Mario', marioSchema)

module.exports = marioModel;