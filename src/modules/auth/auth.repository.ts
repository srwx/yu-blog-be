import { PrismaClient } from "@prisma/client"
import { CreateUserBodyRequest } from "../user/user.schema"

export class AuthRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createUser(userData: CreateUserBodyRequest) {
    try {
      const newUser = await this.prisma.user.create({ data: userData })
      return newUser
    } catch (err) {
      // TODO: how to handle error if prisma create error
      console.error("Error from AuthRepository")
      console.error(err)
      throw new Error("Error from AuthRepository")
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } })
      return user
    } catch (err) {
      console.error(err)
      throw new Error("Error, AuthRepository, getUserByEmail")
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } })
      return user
    } catch (err) {
      console.error(err)
      throw new Error("Error, AuthRepository, getUserById")
    }
  }
}
