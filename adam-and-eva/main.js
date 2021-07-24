let apple = new Apple(10);
let adam = new Human("Adam", "Male", 68);
let eva = new Human("Eva", "female", 50);

adam.getName(eva);
eva.getName(adam);
adam.getWeight(eva);
adam.sayHuman(eva);
eva.eatApple(apple);
adam.eatApple(apple);
console.log(adam.checkApple(apple));
console.log(eva.checkApple(apple));
