class Date {
    day;
    month;
    year;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(day) {
        return this.day = day;
    }
    setMonth(month) {
        return this.month = month;
    }
    setYear(year) {
        return this.year = year;
    }
    setDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}
let date = new Date(22, 7, 2021);
// document.write(date.setDay(30))
document.write(date.getDay())

