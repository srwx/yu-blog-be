import { NextFunction, Request, Response } from "express"
import { AuthService } from "../modules/auth/auth.service"

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { jwt } = req.cookies
  if (!jwt) return res.status(401).json({ message: "Unauthorized" })

  const authService = new AuthService()
  const isJwtValid = authService.verifyToken(jwt)

  if (isJwtValid) return next()
  else return res.status(401).json({ message: "Invalid token" })
}
