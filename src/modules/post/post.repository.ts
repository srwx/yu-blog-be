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

  async getPostsByUserId(userId: string) {
    try {
      const posts = this.prisma.post.findMany({ where: { authorId: userId } })
      return posts
    } catch (err) {
      throw new Error("Error from PostRepo")
    }
  }

  async createPost(postData: CreatePostBodyRequest, userId: string) {
    try {
      const createdPost = this.prisma.post.create({
        data: { content: postData.content, authorId: userId },
      })
      return createdPost
    } catch (err) {
      console.error("Error from PostRepository")
      console.error(err)
      throw new Error("Error from PostRepository")
    }
  }
}
