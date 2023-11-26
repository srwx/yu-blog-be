import { z } from "zod"
import { validateEnv } from "../utils/env"

const zodStringBoolean = z.string().transform((val) => val === "true")

export const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  ENABLE_COOKIE_SECURE: zodStringBoolean.default("false"),
})

export const environment = validateEnv(EnvSchema, process.env)
