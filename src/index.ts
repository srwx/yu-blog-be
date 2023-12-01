import express from "express"
import cookieParser from "cookie-parser"
import userController from "./modules/user/user.controller"
import authController from "./modules/auth/auth.controller"
import postController from "./modules/post/post.controller"

const app = express()
const PORT = 3001

app.use(express.json()) //แปลง JSON String เป็น JavaScript Object (ตอนรับข้อมูลด้วย req.body ใน POST method -> ได้ JSON -> convert เป็น JS Object เพื่อเอาไปใช้ต่อได้)
app.use(cookieParser()) // middleware ที่ทำให้เรา get cookie มาใช้แบบ JS Object ได้ และทำให้เรา get cookie บน request, set cookie ใน response และ set config ต่างๆให้ cookie ได้ง่ายขึ้น

app.use("/api/auth", authController)
app.use("/api/user", userController)
app.use("/api/post", postController)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`)
})
