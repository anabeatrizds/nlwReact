const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))


//utilizando template enginee
const nunkjucks = require ("nunjucks")
nunkjucks.configure("scr/views", {
    express: server,
    noCache: true
})

//configurar caminhos no servidor
//pagina inicial
//req: requisição - pedido
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")

})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html", { title: ""})

})

server.get("/search", (req, res) => {
    return res.render("search-results.html")

})

//ligar o servidos
server.listen(3000)