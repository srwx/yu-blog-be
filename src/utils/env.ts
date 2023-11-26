import { ZodError, ZodTypeAny, z } from "zod"

// TODO: explore this file how it work and uncomment logger to log result to console

function isZodError(err: unknown): err is ZodError {
  return err instanceof ZodError
}

function formatError(err: ZodError) {
  const { errors } = err
  const lines = errors.map((error) => {
    const { path, message } = error
    return `${path.join(".")}: ${message}`
  })
  return `
  ------------- Invalid environment variables -------------
  
  ${lines.join("\n")}
  
  ---------------------------------------------------------
    `
}

export function validateEnv<T extends ZodTypeAny>(
  schema: T,
  source: object = process.env
  //   logger: Logger = console
): z.infer<T> {
  try {
    const env = schema.parse(source)
    // logger.log("Environment variables are valid")
    return env
  } catch (err: unknown) {
    if (!isZodError(err)) throw err
    const message = formatError(err)
    throw new Error(message)
  }
}
