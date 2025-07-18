const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://Seidimonografia:MussaMonografia@login.csnptrj.mongodb.net/?retryWrites=true&w=majority&appName=login")

// Check database connected or not
connect.then(() => {
    console.log("Base de dados conectada com sucesso");
})
.catch((error) => {
    console.log("A base de dados não pode ser conectada", error);
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;