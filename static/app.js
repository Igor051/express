const express = require("express")
const path = require("path")
// для роботи зі статичними файлами в express використовують express.static() в котрий передаємо шлях до папки зі
// статичними файлами
// Щоб вбудувати  express.static() в прочес опрацювання запитів використовуємо app.use()
// app.use() - метод, який позволяє добавляти мідлвари в конвеєр опрацювання запитів
const app = express()

const path_to_static = path.join(process.cwd(), "static")
app.use(express.static(path_to_static))
// якщо хочемо щоб всім цим файлам передувала якась урла то просто робимо:
// app.use("/route", express.static(path_to_static))

// можа і юзати декілька статичних папок: app.use(express.static(path)) 1
//                                        app.use(express.static(path)) 2

// далі просто перехожу на урлу http://localhost:3000/index.html
// і по суті відправляється файл html користувачу

// Обработчик на "/" не бути працювати, бо на фронт відправиться index.html ,
// При http://localhost:3000 відправляється index.html, це еквівалентно http://localhost:3000/index.html
// Для файлів .html з іншими назвами вже треба вказувати точний шлях http://localhost:3000/some.html
// https://metanit.com/web/nodejs/4.4.php

app.use("/f+k", (req, res) => { // метод use() спрацює на всі методи (get, post, put, delete, patch)
    res.end('I finish')
})
// символи підстановок
// ? - вказує на те що символ перед ним може бути відсутнім
// + - вказує на те що символ перед ним може повторюватися будь-яку кількість разів
// * - замість цього символа можна підставити будь-які символи
// () - позволяють згрупувати символи, (ab)? вказує що ab може бути присутнім, а може і ні

app.get("/", (req, res) => {
    res.write("---")
    res.end()
})


app.listen(3000)