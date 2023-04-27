const modcom = require("./modcom")
const getRequestData = require("./utils")

const router = async (req, res) => {
    if (req.url == "/api/tasks" && req.method == "GET") {
        console.log(modcom.getTask(0))

    } else if (req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method == "GET") {
        let id = req.url.split("/")[3]
        modcom.getTask(id)

    } else if (req.url == "/api/tasks" && req.method == "POST") {
        let data = JSON.parse(await getRequestData(req))
        modcom.addTask(data.name, data.desc, data.diff)
    } else if()
}

module.exports = router