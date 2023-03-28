const http = require("http")
const path = require("path")
const fs = require("fs")
const server = http.createServer((req, res) => {
    console.log(req.method)

    switch (req.method) {
        case "GET":
            fs.readFile(path.join(__dirname, "index03.html"), (err, data) => {
                if (err) {
                    res.end("<h1>" + "error 404" + "</h1>")
                    throw err
                } else {
                    res.write(data)
                    res.end()
                }
            })
            break;
        case "POST":
            // odbiór posta
            handleUpload(req, res)

            break;
    }
    // console.log("ADRES ZADANIA: ", req.url)
    // res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    // res.end('<h1>ADRES ZADANIA (url) to: ' + req.url + '</h1>')
})

function handleUpload(req, res) {
    let body = "";

    //kiedy przychodzą dane postem, w postaci pakietów
    //łącza się do jednej zmiennej "body"

    req.on("data", function (data) {
        console.log("data: " + data)
        body += data.toString();
    })

    //kiedy przyjdą już WSZYSTKIE dane
    //parsujemy je do obiektu
    //i odsyłamy do przeglądarki

    req.on("end", function (data) {

        let rgb = JSON.parse(body)
        console.log("RGB : ", rgb)
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(rgb))

    })
}

server.listen(3000, () => {
    console.log("server running on port 3000")
})