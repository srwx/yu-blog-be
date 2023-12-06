import { Router } from "express"
import { requireAuth } from "../../middlewares/requireAuth"
import { PostService } from "./post.service"
import { validateBodyRequest } from "../../middlewares/validateBodyRequest"
import { CreatePostBodyRequest } from "./post.schema"
import { ExpressCustomRequestBody } from "../../types/express"
import { AuthService } from "../auth/auth.service"

const postController = Router()
const postService = new PostService()
const authService = new AuthService()

postController.get("/", async (req, res) => {
  try {
    const posts = await postService.getAllPosts()
    res.status(200).json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

postController.get("/id", async (req, res) => {
  try {
    // TODO: get single post by id
  } catch (err) {
    console.error("Error from PostController")
    console.error(err)
    res.status(500).send(err)
  }
})

postController.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params
    const posts = await postService.getPostsByUserId(userId)
    res.status(200).json({ success: true, posts })
  } catch (err) {
    res.status(500).send(err)
  }
})

postController.post(
  "/create",
  requireAuth,
  validateBodyRequest(CreatePostBodyRequest),
  async (req: ExpressCustomRequestBody<CreatePostBodyRequest>, res) => {
    try {
      const data = req.body
      const token = req.cookies["jwt"]
      const userId = authService.getUserIdByToken(token)
      const createdPost = await postService.createPost(data, userId)
      res.status(200).json({ message: "Create post success" })
    } catch (err) {
      console.error(err)
      res.status(500).send(err)
    }
  }
)

export default postController
