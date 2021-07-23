class Battery {
    energy;
    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    setEnergy(chargeEnergy) {
        this.energy = chargeEnergy;
    }

    useEnergy() {
        this.energy--;
    }
}