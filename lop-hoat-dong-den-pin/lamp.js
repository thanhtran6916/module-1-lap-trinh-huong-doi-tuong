class Lamp {
    status;
    battery;
    constructor(status, Battery) {
        this.status = status;
        this.battery = Battery;
    }

    turnOn() {
        alert("Đã bật đèn");
        this.status = true;
        this.battery.useEnergy()
    }

    turnOff() {
        alert("Đã tắt đèn");
        this.status = false;
    }
}