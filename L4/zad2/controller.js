const { Animal, animalsArray } = require("./model")

module.exports = {
    add: () => {
        // utwórz obiekt klasy Animal
        // dodaj do animalsArray
    },
    delete: (id) => {
        // usuwanie po id z animalsArray
    },
    update: (id) => {
        // update po id elementu animalsArray
    },
    getall: () => {
        return animalsArray
    }

}