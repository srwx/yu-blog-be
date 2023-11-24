import { z } from "zod"

export const CreateUserBodyRequest = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
})

export type CreateUserBodyRequest = z.infer<typeof CreateUserBodyRequest>
