const express = require("express")

const app = express()

// express.json() - повертає json парсер, щоб сервер міг отримувати дані в json форматі
// express.urlencoded() - express.urlencoded () - це метод, вбудований в express для розпізнавання
// вхідного об'єкта запиту у вигляді рядків або масивів. Ці методи викликається в якості
// проміжного обробника (мідлвари)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/users", (req, res) => {
    if (!req.body) res.status(400).end()
    res.send(req.body)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000)