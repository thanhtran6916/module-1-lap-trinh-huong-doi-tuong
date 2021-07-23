class Lamp {
    battery;
    status;

    constructor(battery, status) {
        this.battery = battery;
        this.status = status;
    }

    lightLame() {
        if (this.status) {
            alert("Đèn đã tắt");
        } else {
            alert("Đèn đang sáng");
        }
    }

    turnOn() {
        this.status = true;
        this.lightLame()
    }

    turnOff() {
        this.status = false;
        this.lightLame();
    }
}
