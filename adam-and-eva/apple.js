class Apple {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return "Còn " + this.weight + " miếng";
    }
    decrease() {
        this.weight--;
    }
    isEmpty() {
        return this.weight === 0;
    }
}