import { PrismaClient } from "@prisma/client"
import { CreateUserRequestBody } from "./user.type"

export class UserRepository {
  private prisma = new PrismaClient()

  async getAllUsers() {
    const users = await this.prisma.user.findMany()
    return users
  }

  async createUser(userData: CreateUserRequestBody) {
    const newUser = await this.prisma.user.create({ data: userData })
    // TODO: how to handle error if prisma create error
    return newUser
  }
}
