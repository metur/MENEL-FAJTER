export default class Menel {
    constructor(name){
        this.name = name
        this.hp = Math.floor(Math.random() * 20 + 10) // Random HP between 1 and 10
        this.atk = Math.floor(Math.random() * 3 + 1) // Random attack between 1 and 5
    }
}