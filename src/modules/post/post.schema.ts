import { z } from "zod"

export const CreatePostBodyRequest = z.object({
  content: z.string(),
})

export type CreatePostBodyRequest = z.infer<typeof CreatePostBodyRequest>
