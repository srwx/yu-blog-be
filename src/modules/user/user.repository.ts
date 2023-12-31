import { PrismaClient } from "@prisma/client"

export class UserRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllUsers() {
    try {
      const users = await this.prisma.user.findMany()
      return users
    } catch (err) {
      // TODO: how to handle error if prisma findMany error
      console.error("Error from UserRepository")
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
      return user
    } catch (err) {
      // TODO: how to handle error if prisma findUnique error
      console.error("Error from UserRepository")
      console.error(err)
      throw new Error("Error from UserRepository")
    }
  }

  // TODO: edit user
  async editUser() {}

  // TODO: delete user
  async deleteUser() {}
}
