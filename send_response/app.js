const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
    const path_to_index = path.join(process.cwd(), "index.html")
    res.sendFile(path_to_index)
})

app.get("/foo/bar",(req,res)=>{
    res.statusMessage = "bla bla" // може бути за замовчуванням
    res.sendStatus(404)
    // response.status(404).send(`bla bla`) - альтернатива

})

app.listen(3000)