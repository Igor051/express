const express = require("express")
const {usersRouter} = require("./routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Router дозволяє визначити дочірні підмаршрути зі своїми обработчиками щодо деякого головного маршруту
app.use("/users", usersRouter) // для цього працюватимуть методи get("/users/:id) i post("users/foo")
// важливо замітити що якщо в роут не добавити обработчик на "/" то на "/users" не працюватиме

// нормальна структура папок app -> routers-> middlewares -> controllers -> services/models

app.listen(3000)