const path = require('path');
const express = require('express');
const express_handlebars = require('express-handlebars');
const handlebars = require('hbs');
const app = express();

const hbs = express_handlebars.create({      // передаємо різні налаштування нашого темплейт двіжка
    partialsDir: path.join(__dirname, 'template engine', "partials"), // часткові представлення (partial views), задаємо шлях
    layoutsDir: path.join(__dirname, "template engine", "layouts"), // layout - сторінка яка визначає загальний макет для всіх інших сторінок сайту
    defaultLayout: "layout",  // макет за замовчуванням
    extname: "hbs", // розширення що мають файли

    helpers: {
        getTime: function () {
            let date = new Date()
            let hour = date.getHours()
            let minute = date.getMinutes()
            let second = date.getSeconds()

            if (minute < 10) {
                minute = "0" + minute
            }
            if (second < 10) {
                second = "0" + second
            }

            return "Current time: " + hour + ":" + minute + ":" + second;
        },
        createStringList: function (array) {
            let result = "";
            for (let i = 0; i < array.length; i++) {
                result += "<li>" + array[i] + "</li>";
            }
            return new handlebars.SafeString("<ul>" + result + "</ul>"); // SafeString - обов'язково, коли повертаємо html
        }
    }
})

app.engine('.hbs', hbs.engine); // створюю шаблонізатор для файлів з розширенням .hbs
app.set('view engine', '.hbs'); // // кажу що мій 'view engine' (template engine) це файли .hbs (установлюю handlebars в якості вью енжина)
app.set('views', path.join(__dirname, 'template engine')); // встановлюю шлях до 'view engine' файлів

app.get('/', function (req, res) {
    res.render('index', {
        fruits: ["apple", "lemon", "banana", "grape"]
    }); // .render() на основі темплейт двіжка створює html сторінку і передає туди всі дані
});

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: "my contacts",
        phone: "0501231253",
        email: "dorah@gmail.com",
        fruits: ["apple", "lemon", "banana", "grape"]
    });
});

app.listen(3000);



