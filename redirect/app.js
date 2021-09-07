const express = require("express")

const app = express()

// для переадресації використовуємо метод redirect([status,] path)
// path - шлях на який здійснюємо переадресацію, status - статусний код переадресації,
// за замовчуванням 302 (тимчасова переадресація)

// можна виконувати переадресацію як по абсолютним шляхам так і по відносним
// response.redirect("https://metanit.com") - по абсолютному просто вказуєм адрес


// на 1 рівень вверх
app.get("/home/foo/bar", (req, res) => {
    res.redirect("about")                 // /home/foo/bar -> /home/foo/about
})

// переадресація відносно коріневого каталогу програми, то ставимо слеш
/*app.get("/home/foo/bar", (req, res) => {
    res.redirect("/about")                 // /home/foo/bar -> /about
})*/

// на 1 рівень вверх
/*app.get("/home/foo/bar", (req, res) => {
    res.redirect("./about")                 // /home/foo/bar -> /home/foo/about
})*/

//на 2 рівня вверх
/*app.get("/home/foo/bar", (req, res) => {
    res.redirect("../about")                 // /home/foo/bar -> /home/about
})*/

// На 3 рівня не можна в даному випадку, треба скористатися /about

// просто піднімаємось на n рівнів вверх
/*app.get("/home/foo/bar", (req,res)=>{
    res.redirect(".")                      // /home/foo/bar -> /home/foo
})

app.get("/home/foo/bar", (req,res)=>{
    res.redirect("..")                      // /home/foo/bar -> /home
})*/

// на 3 рівня вже не можна, треба скористатися "/"

app.listen(3000)