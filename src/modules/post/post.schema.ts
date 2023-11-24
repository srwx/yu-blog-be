import { z } from "zod"

export const CreatePostBodyRequest = z.object({
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
})

export type CreatePostBodyRequest = z.infer<typeof CreatePostBodyRequest>
