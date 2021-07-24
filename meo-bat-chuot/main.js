let cat = new Cat("cat", 25, 25);
let mount1 = new Rat("mount1", 3, 22, true);
let mount2 = new Rat("mount2", 3, 26, true);


    mount1.saySomething();
    cat.saySomething();
    mount2.saySomething();
    cat.saySomething();
    cat.takeAndEatMount(mount1);
    cat.takeAndEatMount(mount2);
    console.log(mount1.life);
    console.log(mount2.life);
