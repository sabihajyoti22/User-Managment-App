const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

require("./Config/db")
const userRouter = require("./Routes/user.route")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// api/users : GET
// api/users/:id : GET
// api/user/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.use("/api/users", userRouter)

app.use("/",(req,res)=>{
  res.statusCode = 200;
    res.send("<h1>Welcome to User Managemnt App</h1>")
})
// Route not found error
app.use((req,res,next)=>{
    res.statusCode = 404;
      res.send("<h1>404 Page not found!!!</h1>")
  })
// Server error
app.use((error,req,res,next)=>{
  res.statusCode = 200;
    res.send("<h1>Server Error</h1>")
})

module.exports = app