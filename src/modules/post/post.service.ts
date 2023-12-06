import { PostRepository } from "./post.repository"
import { CreatePostBodyRequest } from "./post.schema"

export class PostService {
  private postRepository

  constructor() {
    this.postRepository = new PostRepository()
  }

  async getAllPosts() {
    try {
      const posts = await this.postRepository.getAllPosts()
      return posts
    } catch (err) {
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

  async getPostsByUserId(userId: string) {
    try {
      const posts = await this.postRepository.getPostsByUserId(userId)
      return posts
    } catch (err) {
      throw new Error("Error from PostService")
    }
  }

  async createPost(postData: CreatePostBodyRequest, userId: string) {
    try {
      const createdPost = await this.postRepository.createPost(postData, userId)
      return createdPost
    } catch (err) {
      console.error(err)
      throw new Error("Error from PostService")
    }
  }

  async deletePostByPostId(postId: string) {
    try {
      const deletedUser = await this.postRepository.deletePostByPostId(postId)
      return deletedUser
    } catch (err) {
      console.error(err)
      throw new Error("Error from PostService")
    }
  }
}
