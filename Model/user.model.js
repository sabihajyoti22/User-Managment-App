const mongoose = require("mongoose")

const userTemplete = mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    createdOn:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User",userTemplete)