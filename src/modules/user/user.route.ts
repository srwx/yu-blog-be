import express from "express"
import { PrismaClient } from "@prisma/client"

const userRoute = express.Router()
const prisma = new PrismaClient()

userRoute.get("/", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

userRoute.post("/", async (req, res) => {
  try {
    const createdUser = await prisma.user.create({ data: req.body })
    res.status(200).json({ success: true, user: createdUser })
  } catch (err) {
    // TODO: how to handle error better with custom error code (e.g. password is not provide but required, etc.)
    console.error(err)
    res.status(500).json({ success: false })
    throw new Error("Error to create user")
  }
})

export default userRoute
