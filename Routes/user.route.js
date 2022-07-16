const express = require("express")
const { getUser, createUser, updateUser, deleteUser } = require("../Controller/user.controller")
const router = express.Router()

router.get("/",getUser)
router.post("/",createUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports = router