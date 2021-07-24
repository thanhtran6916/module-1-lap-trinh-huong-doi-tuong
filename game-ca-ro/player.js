class Player {
    icon;
    status;

    constructor(icon, status) {
        this.icon = icon;
        this.status = status;
    }

    tick() {
        return `${this.icon}`;
    }
}