const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("resp")
})

app.get("/user", (req, res) => {
    res.send({name: "Vasya", age: 15})
})

app.get("/error", (req, res) => {
    res.status(400)
    res.end("bad request")
})

app.get("/write", (req, res) => {
    res.setHeader("Count-of-writes", "3") // header обовязково повинен визначатися перед res.body
    // value в header передаються як строка
    res.write("write 1\n")
    res.write("write 2\n")
    res.write("write 3\n")

    res.end()
})

app.listen(3000)

module.exports = app