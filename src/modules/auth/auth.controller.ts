import express from "express"
import { validateBodyRequest } from "../../middlewares/validateBodyRequest"
import { CreateUserBodyRequest } from "../user/user.schema"
import { ExpressCustomRequestBody } from "../../types/express"
import { AuthService } from "./auth.service"

const authController = express.Router()
const authService = new AuthService()

authController.post(
  "/register",
  validateBodyRequest(CreateUserBodyRequest),
  async (req: ExpressCustomRequestBody<CreateUserBodyRequest>, res) => {
    try {
      const userData = req.body
      const { email, password, username } = userData
      const hashedPassword = authService.getHashPassword(password)
      const createdUser = await authService.createUser({
        email,
        username,
        password: hashedPassword,
      })
      res.status(200).json({
        message: "Register success",
        user: {
          id: createdUser.id,
          email: createdUser.email,
          username: createdUser.username,
        },
      })
    } catch (err) {
      console.error("Error from AuthController")
      console.error(err)
      res.status(500).send(err)
    }
  }
)

authController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await authService.getUserByEmail(email)
    if (!user)
      res.status(400).json({ message: "Email or password is incorrect" }) // email not found in db

    const isPasswordCorrect = authService.isPasswordCorrect(
      password,
      user.password
    )
    if (!isPasswordCorrect)
      res.status(400).json({ message: "Email or password is incorrect" }) // password is incorrect

    const token = authService.createToken(user.id)
    authService.setTokenToCookie(res, token)
    res.status(200).json({
      message: "Login success",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(401).json({ message: "Email not found" })
  }
})

export default authController
