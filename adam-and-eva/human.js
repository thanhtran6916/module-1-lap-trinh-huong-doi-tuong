class Human {
    name;
    gender;
    weight;
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    sayHuman(otherHuman) {
        console.log("Hey! " + otherHuman.name + " ăn táo không?");
    }
    eatApple(apple) {
        if (!apple.isEmpty()){
            apple.decrease();
            console.log(apple.getWeight());
        }
    }
    checkApple(apple) {
        return apple.weight;
    }
    getName(human) {
        return console.log(human.name);
    }
    getGender(human) {
        return console.log(human.gender);
    }
    getWeight(human){
        return console.log(human.weight);
    }

}