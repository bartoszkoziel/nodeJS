const utils = require("./utils")
const controller = require("./controller")
const fs = require("fs");

const router = async (req, res) => {

    switch (req.method) {
        case "GET":
            fs.readFile("views/index01.html", (err, data) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' })
                    res.write("<h1>błąd 404 - nie ma pliku!<h1>")
                    res.end()
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.write(data)
                    res.end()
                }
            })

        case "POST":

            if (req.url == "/add") {
                // odczytaj dane z body
                // użyj funkcji z controllera
                // odpowiedz do klienta
                // let data = await getRequestData(req);
                // console.log(data);
                // controller.add(data)
            }
            else if (req.url == "/getall") {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify(controller.getall()))
                res.end()
            }
            else if (req.url == "/delete") {
                //  usuń dane z tablicy zwierząt i odpowiedz do klienta
            }
            else if (req.url == "/update") {
                //update
            }

            break;

    }
}

module.exports = router