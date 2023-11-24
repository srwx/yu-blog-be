import { Router } from "express"

const commentController = Router()

commentController.get("/:postId", async (req, res) => {
  try {
    // TODO: get all comments in specific postId
  } catch (err) {
    console.error(err)
    res.status(500).send("Comment Controller error")
  }
})

commentController.get("/:postId/:commentId", async (req, res) => {
  try {
    // TODO: get single comment
  } catch (err) {
    console.error(err)
    res.status(500).send("Comment Controller error")
  }
})

commentController.post("/:postId", async (req, res) => {
  try {
    // TODO: create comment in specific postId
  } catch (err) {
    console.error(err)
    res.status(500).send("Comment Controller error")
  }
})

export default commentController
