import { PostRepository } from "./post.repository"
import { CreatePostBodyRequest } from "./post.schema"

export class PostService {
  private postRepository

  constructor() {
    this.postRepository = new PostRepository()
  }

  async getAllPosts() {
    try {
      // TODO
    } catch (err) {
      console.error("Error from PostService")
      console.error(err)
      throw new Error("Error from PostService")
    }
  }

  async getPostById(id: string) {
    try {
      // TODO
    } catch (err) {
      console.error("Error from PostService")
      console.error(err)
      throw new Error("Error from PostService")
    }
  }

  async createPost(postData: CreatePostBodyRequest) {
    try {
      // TODO
    } catch (err) {
      console.error("Error from PostService")
      console.error(err)
      throw new Error("Error from PostService")
    }
  }
}
