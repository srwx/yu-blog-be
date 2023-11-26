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
      const createdUser = await authService.createUser(userData)
      const token = authService.createToken(createdUser.id) // create jwt
      authService.setTokenToCookie(res, token) // add jwt to cookie
      res.status(200).json(createdUser)
    } catch (err) {
      console.error("Error from AuthController")
      console.error(err)
      res.status(500).send(err)
    }
  }
)

export default authController
