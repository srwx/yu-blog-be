import { UserRepository } from "./user.repository"
import { CreateUserRequestBody } from "./user.type"

export class UserService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async getAllUsers() {
    const users = await this.userRepository.getAllUsers()
    return users
  }

  async createUser(userData: CreateUserRequestBody) {
    const newUser = await this.userRepository.createUser(userData)
    // TODO: how to handle error that come from repository
    return newUser
  }
}
