import { PrismaClient } from "@prisma/client"

export class CommentRepository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createComment(authorId: string, postId: string, content: string) {
    try {
      const createdComment = this.prisma.comment.create({
        data: { authorId, postId, content },
      })
      return createdComment
    } catch (err) {
      console.error(err)
      throw new Error("error createComment repo")
    }
  }

  async deleteCommentByCommentId(commentId: string) {
    try {
      const deletedComment = this.prisma.comment.delete({
        where: { id: commentId },
      })
      return deletedComment
    } catch (err) {
      console.error(err)
      throw new Error("error deleteComment repo")
    }
  }
}
