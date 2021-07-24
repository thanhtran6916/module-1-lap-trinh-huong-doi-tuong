class Switch {
    status;
    lamp;
    constructor(status, electricLamp) {
        this.status = status;
        this.lamp = electricLamp;
    }
    switchOn() {
        this.lamp.electricLamp();
        this.lamp.turnOn();
        this.status = true;
    }
    switchOff() {
        this.lamp.electricLamp();
        this.lamp.turnOff();
        this.status = false;
    }
}