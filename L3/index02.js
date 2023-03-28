const test = async () => {
    return new Promise((resolve, reject) => {
        try {
            resolve("powodzenie długiej operacji")
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