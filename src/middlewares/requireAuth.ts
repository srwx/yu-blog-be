import { NextFunction, Request, Response } from "express"

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jwt } = req.cookies
  if (!jwt) return res.status(401).json({ message: "Unauthorized" })

  // TODO: verify jwt
  next()
}
