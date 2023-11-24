import { UserRepository } from "./user.repository"
import { CreateUserRequestBody } from "./user.type"

export class UserService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async getAllUsers() {
    try {
      const users = await this.userRepository.getAllUsers()
      return users
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserService")
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.userRepository.getUserById(id)
      return user
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserService")
    }
  }

  async createUser(userData: CreateUserRequestBody) {
    try {
      const newUser = await this.userRepository.createUser(userData)
      return newUser
    } catch (err) {
      console.error(err)
      throw new Error("Error from UserService")
    }
  }
}
