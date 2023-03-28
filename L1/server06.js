const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
    console.log("ADRES ZADANIA: ", req.url)
    // res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    // res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')

    if(req.url == "/"){
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
        fs.readFile(path.join(__dirname, "index01.html"), (err, data) => {
            if(err) {
                res.end("<h1>" + "error 404" + "</h1>")
                throw err
            } else {
                res.write(data)
                res.end()
            }
        })
    }

    if(req.url == "/style1.css"){
        res.writeHead(200, { "content-type": "text/plain" })
        fs.readFile(path.join(__dirname, "style1.css"), (err, data) => {
            if(err) {
                res.end("<h1>" + "error 404" + "</h1>")
                throw err
            } else {
                res.write(data)
                res.end()
            }
        })
    }
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})