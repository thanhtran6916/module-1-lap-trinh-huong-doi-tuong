class Lamp {
    status;
    constructor(status) {
        this.status = status;
    }
    electricLamp() {
        if (this.status) {
            alert("Đèn đã tắt!");
        } else {
            alert("Đèn đã bật!");
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false
    }
}