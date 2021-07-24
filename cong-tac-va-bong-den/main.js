let myLamp = new Lamp(false);
let mySwitch = new Switch(false, myLamp);

function turnOnOffSwitch() {
    if (mySwitch.status) {
        mySwitch.switchOff();
    } else {
        mySwitch.switchOn();
    }
}