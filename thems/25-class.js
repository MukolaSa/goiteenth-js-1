// function Client (name, age, date) {
//     this.name = name
//     this.age = age
//     this.date = date
// }

// Hotel.prototype.changeDate = function(newDate) {
//     this.date = newDate
// }

// const client = new Client('Maks', 'Matviy', 19, '25.12.2022')
// const lastClient = new Client('Bob', 'Rock', 24, '13.11.2022')

class Client {
    constructor(name, age, date) {
        this.name = name
        this.age = age
        this.date = date
    }
    get name() {
        this._name
    }

    set name(newName) {
        this._name = newName
    }
}
const client = new Client('Maks', 'Matviy', 19, '25.12.2022')
const lastClient = new Client('Bob', 'Rock', 24, '13.11.2022')