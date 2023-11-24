import { Router } from "express"

const postController = Router()

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

postController.post("/", async (req, res) => {
  try {
    // TODO: create post
  } catch (err) {
    console.error("Error from PostController")
    console.error(err)
    res.status(500).send(err)
  }
})

export default postController
