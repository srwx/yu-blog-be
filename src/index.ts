import express from "express"
import userRouter from "./modules/user/user.route"

const app = express()
const PORT = 3001

app.use(express.json()) //แปลง JSON String เป็น JSON Object (ทำให้รับข้อมูลมาแบบ JSON (ตอนรับข้อมูลด้วย req.body ใน POST method))

app.use("/api/user", userRouter)

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`)
})
