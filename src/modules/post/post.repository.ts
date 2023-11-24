import { PrismaClient } from "@prisma/client"
import { CreatePostBodyRequest } from "./post.schema"

export class PostRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllPosts() {
    try {
      const posts = await this.prisma.post.findMany()
    } catch (err) {
      console.error("Error from PostRepository")
      console.error(err)
      throw new Error("Error from PostRepository")
    }
  }

  async getPostById(id: string) {
    try {
    } catch (err) {
      console.error("Error from PostRepository")
      console.error(err)
      throw new Error("Error from PostRepository")
    }
  }

  async createPost(postData: CreatePostBodyRequest) {
    try {
    } catch (err) {
      console.error("Error from PostRepository")
      console.error(err)
      throw new Error("Error from PostRepository")
    }
  }
}
