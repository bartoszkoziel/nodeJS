const http = require("http")
const path = require("path")
const fs = require("fs")
const server = http.createServer((req, res) => {
    console.log(req.method)

    switch (req.method) {
        case "GET":
            fs.readFile(path.join(__dirname, "index01.html"), (err, data) => {
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

    req.on("data", function (data) {
        console.log("data: " + data)
        body += data.toString();
    })

    req.on("end", function (data) {

        console.log(body);
        const params = new URLSearchParams(body);
        const finishObj = Object.fromEntries(params);
        finishObj.btn1 = "wyślij"
        finishObj.suma = parseInt(finishObj.a) + parseInt(finishObj.b)
        finishObj.iloczyn = parseInt(finishObj.a) *  parseInt(finishObj.b)


        console.log(finishObj)
        res.writeHead(200, { "Content-type": "application/json;charset=utf-8" });
        res.end(JSON.stringify(finishObj, null, 5));

    })
}

server.listen(3000, () => {
    console.log("server running on port 3000")
})