const http = require("http")
const PORT = 3000
const server = http.createServer((req, res) => {
    let useragent = req.headers["user-agent"].split(" ")
    console.log(req.headers)
    res.writeHead(200, { "content-type": "text/html" })
    res.end("<h1>towja przegladarka to: " + useragent[useragent.length - 1] + "</h1>")
})

server.listen(PORT, () => {
    console.log("server running on port 3000")
})