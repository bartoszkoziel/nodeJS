const http = require("http")
const server = http.createServer((req, res) => {
    console.log("ADRES ZADANIA: ", req.url)
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})