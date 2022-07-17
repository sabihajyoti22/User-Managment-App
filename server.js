const app = require("./app")
const config = require("./Config/config")

const PORT = config.app.port

app.listen(PORT,()=>{
    console.log(`Server is running at location http://localhost:${PORT}`)
})

// "server" : "nodemon server.js",
// "client" : "cd frontend && npm start",
// "start": "concurrently \"npm run client\" \"npm run server\""