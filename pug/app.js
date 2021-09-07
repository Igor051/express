const express = require("express")
const path = require("path")

const app = express()
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "pug"))

app.get("/", (req, res) => {
    res.render("main", {
        admin: [{name: "Viktor", is_admin: true}, {name: "Denys", is_admin: false}]
    })
})

app.get("/contacts", function(request, response){

    response.render("contacts", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});

app.listen(3000)