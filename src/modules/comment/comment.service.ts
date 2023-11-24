import { CommentRepository } from "./comment.repository"

export class PostService {
  private commentRepository

  constructor() {
    this.commentRepository = new CommentRepository()
  }
}
