const test = async (x) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("zwracam komunikat o powodzeniu dłuższej operacji po " + x + "ms")
        }, x);

    })
}

const check = async () => {
    let info = await test(1500)
    console.log(info);
}

check()