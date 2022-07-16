const config = require("./config")
const mongoose = require("mongoose")

const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(()=>{
    console.log("Database is connected")
})
.catch((err)=>{
    console.log(err)
    process.exit(1)
})

