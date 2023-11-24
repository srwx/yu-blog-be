import { CommentRepository } from "./comment.repository"

export class CommentService {
  private commentRepository

  constructor() {
    this.commentRepository = new CommentRepository()
  }
}
