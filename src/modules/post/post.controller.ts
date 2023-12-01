import { Router } from "express"
import { requireAuth } from "../../middlewares/requireAuth"
import { PostService } from "./post.service"

const postController = Router()
const postService = new PostService()

postController.get("/", async (req, res) => {
  try {
    // TODO: get all posts
  } catch (err) {
    console.error("Error from PostController")
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

postController.post("/", requireAuth, async (req, res) => {
  try {
    // TODO: create post
    // console.log("req", req)
    res.status(200).json({ message: "Create post success" })
  } catch (err) {
    console.error("Error from PostController")
    console.error(err)
    res.status(500).send(err)
  }
})

export default postController
