let myBattery = new Battery(3);
let myLamp = new Lamp(false, myBattery);
document.getElementById("energy").innerHTML = "Mức pin: " + myBattery.energy + "%";

function lame() {
    if (myLamp.status) {
        myLamp.turnOff();
    } else {
        if (myBattery.energy > 0) {
            myLamp.turnOn();
            document.getElementById("energy").innerHTML = "Mức pin: " + myBattery.energy + "%";
            console.log(myBattery.energy);
        } else {
            alert("Hết pin rồi nha!");
        }
    }
}

function charging() {
    myBattery.setEnergy(3);
    document.getElementById("energy").innerHTML = "Mức pin: " + myBattery.energy + "%";
}