require("colors")

console.log("STARTING SERVER".green)

const http = require("http")

const server = http.createServer((req, res) => {
    console.log("ADRES ZADANIA: ", req.url)
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })

    if (req.url == "/A") {
        res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')
        console.log("___ZIELONY___".green)
    }

    if (req.url == "/B") {
        res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')
        console.log("___NIEBIESKI___".blue)
    }

    if (req.url == "/C") {
        res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')
        console.log("___CZERWONY___".red)
    }
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})