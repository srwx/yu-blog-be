import { PrismaClient } from "@prisma/client"

export class CommentRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }
}
