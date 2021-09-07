const express = require("express") // підключаємо express

const app = express()

// мідлвара - запуститься на будь-якій урлі, в кінці завжди next() аби опрацювалась наступна мідлвара
// це ще називають конвеєром
app.use((req, res, next) => {
    res.write("I will run anytime \n")
    next()
})

//  на урлі / але працюватиме і на /about і все що містить в собі /
app.use("/", (req, res, next) => {
    res.write("middleware 1, on / \n")
    next()
})

app.use("/", (req, res, next) => {
    res.write("middleware 2, on / \n")
    next()
})

app.use("/about",(req,res,next)=>{
    res.write("middleware 1, on /about \n")
    next()
})

app.get("/", (req, res) => {
    res.end()
})

app.get("/about", (req, res) => {
    res.end()
})


app.listen(3000)