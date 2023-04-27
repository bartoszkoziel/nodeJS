let tasks = []

function getTask(id) {

    if (id == 0) {
        return tasks
    } else {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) return tasks[i]
        }
    }

    return "didnt find"
}

function addTask(name, desc, diff) {
    let id = Math.floor(Math.random() * 2048) + 1
    tasks.push({
        id: id,
        name: name,
        desc: desc,
        diff: diff
    })

    return 1
}

module.exports = { getTask, addTask }