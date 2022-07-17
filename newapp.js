const express = require("express")
const app = express()

app.use("/",(req,res)=>{
    res.send("<h1>Hiii from new app</h1>")
})
module.exports = app