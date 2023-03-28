const fs = require("fs")

const test = async () => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile("./file01.txt", (err, data) => {
               if(err)
                  resolve(err.message)
               else
                  resolve(data.toString())
            })
        }
        catch (ex) {
            reject(ex)
        }
    })
}

const check = async () => {
    let info = await test()
    console.log(info);
}

check()