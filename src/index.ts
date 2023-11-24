import express from "express"
import userController from "./modules/user/user.controller"

const app = express()
const PORT = 3001

app.use(express.json()) //แปลง JSON String เป็น JSON Object (ทำให้รับข้อมูลมาแบบ JSON (ตอนรับข้อมูลด้วย req.body ใน POST method))

app.use("/api/user", userController)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`)
})
