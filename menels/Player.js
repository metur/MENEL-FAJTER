export default class Player {
        constructor(name){
            this.name = name
            this.hp = 69
            this.atk = 5
            this.hits = 3
        }

        modify_hp(value) {
        this.hp += parseInt(value);
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}

