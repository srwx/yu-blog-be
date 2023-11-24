import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

export const validateBodyRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      return next()
    } catch (err) {
      return res.status(400).json(err)
    }
  }
