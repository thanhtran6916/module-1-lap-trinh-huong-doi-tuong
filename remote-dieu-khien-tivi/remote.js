class Remote {
    code;
    constructor(code) {
        this.code = code;
    }
    turnOnOff(tivi) {
        if (tivi.status) {
            alert("Tivi off!");
        } else {
            alert("Tivi on!");
            tivi.status = !tivi.status;
        }
    }
    changeChannelUp(tivi) {
        tivi.upChannel();
    }
    changeChannelDown(tivi) {
        tivi.downChannel();
    }
    volumeUp(tivi) {
        tivi.upVolume();
    }
    volumeDown(tivi) {
        tivi.downVolume();
    }
}