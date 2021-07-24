let myTivi = new Tivi(123, false, 0, 0);
let myRemove = new Remote(123);

myRemove.turnOnOff(myTivi);
// chuyển đến kênh 7
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
myRemove.changeChannelUp(myTivi);
alert("Đã chuyển đến kênh " + myTivi.getChannel());
// chuyển đến kênh 3
myRemove.changeChannelDown(myTivi);
myRemove.changeChannelDown(myTivi);
myRemove.changeChannelDown(myTivi);
myRemove.changeChannelDown(myTivi);
alert("Đã chuyển đến kênh " + myTivi.getChannel());
// tăng âm lượng lên 2 đơn vị
myRemove.volumeUp(myTivi);
myRemove.volumeUp(myTivi);
alert("Đã tăng volum lên " + myTivi.getVolume())
// tắt tivi
myRemove.turnOnOff(myTivi);