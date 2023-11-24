import express from "express"
import { UserService } from "./user.service"

const userController = express.Router()
const userService = new UserService()

userController.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    // TODO: how to handle dynamic error msg
    console.error(err)
    res.status(500).send(err)
  }
})

userController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await userService.getUserById(id)
    res.status(200).json(user)
  } catch (err) {
    // TODO: how to handle dynamic error msg
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

// req.body มี type
// nestjs: ทำมาให้แล้ว -> dto
// express: ใช้ zod คู่กับ req.body
// ทำ middleware ที่รับ Generic เปน zod schema มา validate
// - https://dev.to/franciscomendes10866/schema-validation-with-zod-and-expressjs-111p
