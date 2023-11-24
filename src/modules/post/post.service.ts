import { PostRepository } from "./post.repository"
import { CreatePostBodyRequest } from "./post.schema"

export class PostService {
  private postRepository

  constructor() {
    this.postRepository = new PostRepository()
  }

  async getAllPosts() {}

  async getPostById(id: string) {}

  async createPost(postData: CreatePostBodyRequest) {}
}
