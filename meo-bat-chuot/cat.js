class Cat {
    name;
    weight;
    speedMax;
    constructor(name, weight, speedMax) {
        this.name = name;
        this.weight = weight;
        this.speedMax = speedMax;
    }
    saySomething() {
        return console.log("meo meo! À thì ra mày chọn cái chết!");
    }
    takeMount(rat) {
        if (this.speedMax > rat.speed) {
            return true;
        } else {
            return false;
        }
    }
    takeAndEatMount(rat) {
        if (this.takeMount(rat) && rat.life) {
            console.log("mèo đã bắt được chuột " + rat.name)
            console.log("mèo đã ăn chuột " + rat.name);
            rat.life = !rat.life;
            this.weight += rat.weight;
        } else if (rat.life === false) {
            console.log("chuột " + rat.name + " chết rồi không ăn được nữa!")
        } else {
            console.log("chuột " + rat.name + " chạy nhanh quá không bắt được rồi!")
        }
    }
}