import { PrismaClient } from "@prisma/client"
import { CreatePostBodyRequest } from "./post.schema"

export class PostRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllPosts() {
    try {
      const posts = await this.prisma.post.findMany({
        include: { author: { select: { username: true, email: true } } },
      })
      return posts
    } catch (err) {
      console.error(err)
      throw new Error("Error from PostRepository")
    }
  }

  async getPostById(id: string) {
    // TODO
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

  async deletePostByPostId(postId: string) {
    try {
      const deletedUser = await this.prisma.post.delete({
        where: { id: postId },
      })
      return deletedUser
    } catch (err) {
      throw new Error("Error from PostRepository, deletePostByPostId")
    }
  }
}
