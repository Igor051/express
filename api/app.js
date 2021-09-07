const express = require("express")
const usersRouter = require("./routes/users.router")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", usersRouter)


app.listen(3000)