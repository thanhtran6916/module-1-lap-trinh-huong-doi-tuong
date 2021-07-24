class Rat {
    name;
    weight;
    speed;
    life;
    constructor(name, weight, speed, life) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.life = life;
    }
    saySomething() {
        return console.log("chit chit");
    }
}