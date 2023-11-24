import { PrismaClient } from "@prisma/client"
import { CreateUserBodyRequest } from "./user.schema"

export class UserRepository {
  private prisma = new PrismaClient()

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany()
      // TODO: how to handle error if prisma findMany error
      return users
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserRepository")
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id,
        },
      })
      // TODO: how to handle error if prisma findUnique error
      return user
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserRepository")
    }
  }

  async createUser(userData: CreateUserBodyRequest) {
    try {
      const newUser = await this.prisma.user.create({ data: userData })
      // TODO: how to handle error if prisma create error
      return newUser
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserRepository")
    }
  }

  // TODO: edit user
  async editUser() {}

  // TODO: delete user
  async deleteUser() {}
}
