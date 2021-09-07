const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")
const app = express()

app.set("view engine", "ejs") // встановлюю ejs в якості view engine
app.use(expressLayouts) // для роботи layout
app.set('layout', path.join(__dirname, "ejs", "layouts", "layout")) // встановлюю де лежать layouts
app.set("views", path.join(__dirname, "ejs")) // визначаю папку з в'юшками

app.get("/contacts", (req, res) => {
    res.render("contacts", {
        title: "my contacts",
        emailsVisible: true,
        emails: ["retro@gmail.com", "estep@gmail.com"],
        phone: "+385323422"
    })
})

app.get("/", (req, res) => {
    res.send("Main page")
})

app.listen(3000)


