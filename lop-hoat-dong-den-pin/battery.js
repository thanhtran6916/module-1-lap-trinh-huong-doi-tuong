class Battery {
    energy;

    constructor(energy) {
        this.energy = energy;
    }

    getBattery() {
        return this.energy;
    }

    setBattery(energy) {
        return this.energy = energy;
    }
    
    useBattery() {
        if (this.energy) {
            this.energy--;
        }
    }
}
