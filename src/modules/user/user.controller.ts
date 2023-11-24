import express from "express"
import { UserService } from "./user.service"

const userController = express.Router()
const userService = new UserService()

userController.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

userController.post("/", async (req, res) => {
  try {
    const userData = req.body
    const createdUser = await userService.createUser(userData)
    res.status(200).json(createdUser)
  } catch (err) {
    // TODO: how to handle dynamic error msg
    console.error(err)
    res.status(500).send(err)
  }
})

export default userController
