import { z } from "zod"

export const CreateCommentBodyRequest = z.object({
  content: z.string(),
})
