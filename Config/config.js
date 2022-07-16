const dotenv = require("dotenv")
dotenv.config()

const dev = {
    app:{
        port: process.env.PORT || 4000
    },
    db:{
        url: process.env.DATABASE_ACCESS || "mongodb://localhost:27017/"
    }
}

module.exports = dev