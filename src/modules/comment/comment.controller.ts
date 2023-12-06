import { Router } from "express"
import { requireAuth } from "../../middlewares/requireAuth"
import { validateBodyRequest } from "../../middlewares/validateBodyRequest"
import { CreateCommentBodyRequest } from "./comment.schema"
import { AuthService } from "../auth/auth.service"
import { CommentService } from "./comment.service"

const commentController = Router()
const authService = new AuthService()
const commentService = new CommentService()

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

commentController.post(
  "/:postId",
  requireAuth,
  validateBodyRequest(CreateCommentBodyRequest),
  async (req, res) => {
    try {
      const { postId } = req.params
      const { content } = req.body
      const userId = authService.getUserIdByToken(req.cookies.jwt)
      const createdComment = await commentService.createComment(
        userId,
        postId,
        content
      )
      res
        .status(200)
        .json({ message: "Create comment success", comment: createdComment })
    } catch (err) {
      console.error(err)
      res.status(500).send("Comment Controller error")
    }
  }
)

commentController.delete("/:commentId", requireAuth, async (req, res) => {
  try {
    const { commentId } = req.params
    // TODO: verify is logged-in user is owner of this commentId
    const deletedComment = await commentService.deleteCommentByCommentId(
      commentId
    )
    res
      .status(200)
      .json({ message: "Delete comment success", comment: deletedComment })
  } catch (err) {
    console.error(err)
    res.status(400).send("Comment Controller error")
  }
})

export default commentController
