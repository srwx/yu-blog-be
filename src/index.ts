import express from "express"
import userController from "./modules/user/user.controller"

const app = express()
const PORT = 3001

app.use(express.json()) //แปลง JSON String เป็น JavaScript Object (ตอนรับข้อมูลด้วย req.body ใน POST method -> ได้ JSON -> convert เป็น JS Object เพื่อเอาไปใช้ต่อได้)

app.use("/api/user", userController)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`)
})
