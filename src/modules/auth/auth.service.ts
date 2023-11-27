import jwt from "jsonwebtoken"
import { type Response } from "express"
import bcrypt from "bcrypt"
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
      console.error("Error from AuthService")
      console.error(err)
      throw new Error("Error from AuthService")
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

  /**
   * @param plainTextPassword plain text of password
   * @returns a hashed string of password
   */
  getHashPassword = (plainTextPassword: string) => {
    const saltRound = 10
    const hashPassword = bcrypt.hashSync(plainTextPassword, saltRound)
    return hashPassword
  }

  /**
   * A function to check is plain text password is match with hash string
   * @param plainTextPassword plain text of password
   * @param hash a hashed string of password, you can get hashed string by getHashPassword()
   * @returns boolean of result
   */
  isPasswordCorrect = (plainTextPassword: string, hash: string) => {
    const result = bcrypt.compareSync(plainTextPassword, hash)
    return result
  }

  async getUserByEmail(email: string) {
    const user = await this.authRepository.getUserByEmail(email)
    if (!user) throw new Error("User not found")
    return user
  }
}
