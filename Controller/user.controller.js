const {v4 : uuid} = require("uuid")
const userSchema = require("../Model/user.model")

const getUser = async (req,res)=>{
    try {
        const users = await userSchema.find()
        res.status(200).json(users);
      } catch (error) {
        res.status(500).send(error.message);
      }
}

const createUser = (req,res)=>{
    try {
        const user = userSchema({
            id: uuid(),
            name: req.body.name,
            email: req.body.email
        })
        user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateUser = async(req,res)=>{
    try {
       const selectedUser = await userSchema.findOne({id: req.params.id})
       selectedUser.name = req.body.name
       selectedUser.email = req.body.email
       await selectedUser.save()
       res.status(202).send("<h1>Updated one user</h1>")
    } catch (error) {
        res.send(error.message)
    }
}

const deleteUser = async(req,res)=>{
    try{
        await userSchema.deleteOne({id: req.params.id})
        res.status(203).send("<h1>Deleted one user</h1>")
    }catch(error){
        res.send(error.message)
    }
}


module.exports = {getUser, createUser, updateUser, deleteUser}