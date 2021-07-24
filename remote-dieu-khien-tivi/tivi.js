class Tivi {
    code;
    status;
    channel;
    volume;
    constructor(code, status, channel, volume) {
        this.code = code;
        this.status = status;
        this.channel = channel;
        this.volume = volume;
    }
    getChannel() {
        return this.channel;
    }
    getVolume() {
        return this.volume;
    }
    upChannel() {
        this.channel += 1;
    }
    downChannel() {
        this.channel -= 1;
    }
    upVolume() {
        this.volume += 1;
    }
    downVolume() {
        this.volume -= 1;
    }
}