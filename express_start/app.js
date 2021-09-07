const express = require("express") // підключаємо express

const app = express() // створюємо об'єкт програми

// встановлюємо обробник для маршруту "/"
app.get("/", (req, res) => {
    res.append("Text","some") // встановлюємо заголовок "Text" зі значенням "some", можна передати
    // масив, ["a","b"] тоді буде 2 заголовка "Text" зі значеннями a i b відповідно
    res.send("<h1>Main page</h1>") // відправляємо відповідь

    // основні методи і властивості response
    // res.headersSent - boolean, вказує чи вже були відправлені заголовки методом response

    // res.cookie(name, value, options?) // встановлює ім'я та значення для файлів cookie
    // options - це об'єкт з певними зарезервованими властивостями (domain, path, encode ...)

    // res.clearCookie(name, options?)  видаляє кукі файли з фказаним ім'ям

    //res.end() - завершує респонс, без якихось даних, також завершуюють res.send(), res.json()

    // res.send(body?) - відправляє відповідь, є завершальним методом, типи - Buffer object, a String, an object, Boolean
    // і строку з html кодом (можна стрімом зчитати), хоча для файлів краще юзати sendFile()

    // res.sendFile(path , options? ,fn?) відправить файл

    //res.json(body?) - відправляє json обєкт (перетворює в json самостійно)

    // res.get(field) - відправляє response header по заданому ключу res.get('Content-Type')
    // => "text/plain"

    // res.redirect(status?, path) перенаправляє на іншу урлу

    // res.render(view , locals?, callback?) - відправляє відрендурену html строку

    // res.sendStatus(statusCode) - відправляє статус код

    // res.status(code) - встановлює статус код, не шле, мож зробити шось типу res.status(403).end()
})

app.get("/contacts", (req, res) => {
    res.send("<h1>contacts</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>about</h1>")
})

app.listen(3000)