import { CommentRepository } from "./comment.repository"

export class CommentService {
  private commentRepository

  constructor() {
    this.commentRepository = new CommentRepository()
  }

  async createComment(authorId: string, postId: string, content: string) {
    try {
      const createdPost = await this.commentRepository.createComment(
        authorId,
        postId,
        content
      )
      return createdPost
    } catch (err) {
      console.error(err)
      throw new Error("error")
    }
  }
}
