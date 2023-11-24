import { PrismaClient } from "@prisma/client"
import { CreatePostBodyRequest } from "./post.schema"

export class PostRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getAllPosts() {}

  async getPostById(id: string) {}

  async createPost(postData: CreatePostBodyRequest) {}
}
