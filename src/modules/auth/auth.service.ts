import jwt from "jsonwebtoken"
import { type Response } from "express"
import { CreateUserBodyRequest } from "../user/user.schema"
import { AuthRepository } from "./auth.repository"
import { environment } from "../../const/env"

export class AuthService {
  private authRepository
  private maxJwtAge

  constructor() {
    this.authRepository = new AuthRepository()
    this.maxJwtAge = 3 * 60 * 60 * 24 // jwt will expired in 3 days after created
  }

  async createUser(userData: CreateUserBodyRequest) {
    try {
      const newUser = await this.authRepository.createUser(userData)
      return newUser
    } catch (err) {
      console.error("Error from UserService")
      console.error(err)
      throw new Error("Error from UserService")
    }
  }

  /**
   *
   * @param userId id of user that generate from prisma
   */
  createToken(userId: string) {
    return jwt.sign({ id: userId }, environment.JWT_SECRET, {
      expiresIn: this.maxJwtAge,
    })
  }

  setTokenToCookie(response: Response, token: string) {
    response.cookie("jwt", token, {
      httpOnly: true,
      maxAge: this.maxJwtAge,
      secure: environment.ENABLE_COOKIE_SECURE,
    })
  }
}