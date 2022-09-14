const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./src/models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", async (req,res) => {

    const posts = await marioModel.find({user: req.user})

    res.json ({
        posts
    })
})

app.post("/mario", async (req,res) => {

try{
    const mario = await marioModel.create({
        name : req.body.name,
        weight : req.body.weight
    })
    res.status(201).json({
        mario
    })
} catch (e){
    res.status(400).json({
        message : "{message: 'either name or weight is missing'}"
    })
}

})

module.exports = app;