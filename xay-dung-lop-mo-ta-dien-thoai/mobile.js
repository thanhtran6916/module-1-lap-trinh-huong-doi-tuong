
class Mobile {
    battery;
    inputMessage;
    outputMessage;
    constructor(battery, inputMessage, outputMessage) {
        this.battery = battery;
        this.inputMessage = inputMessage;//tin nhắn đến
        this.outputMessage = outputMessage;//tin nhắn đã gửi
    }
    getBattery() {
        return this.battery;
    }
    importMessage() {
        //nhận vào tin nhắn
        return memoryAreaInput.push(this.inputMessage);
    }
    exportMessage() {
        //gửi tin nhắn đi
        return memoryAreaExport.push(this.outputMessage);
    }
}
let inputNokia = document.getElementById("input-data-nokia").value;
let inputIphone = document.getElementById("input-data-nokia").value;
let nokia = new Mobile(60, inputIphone, inputNokia);
let iphone = new Mobile(60, inputNokia, inputIphone);


function getArray(myArray, display) {
    let data = "";
    for (let i = 0; i < myArray.length; i++) {
        data += `Message ${i + 1}: ${myArray[i]} </br>`;
    }
    document.getElementById(display).innerHTML = data;
}

let nokiaMemoryAreaInput = [];
let nokiaMemoryAreaExport = [];
let iphoneMemoryAreaInput = [];
let iphoneMemoryAreaExport = [];
//Nokia active
//gửi tin nhắn đi
function SendToIphone() {
    let inputNokia = document.getElementById("input-data-nokia").value;
    nokiaMemoryAreaInput.push(inputNokia);
    nokiaMemoryAreaExport.push(inputNokia);
    document.getElementById("input-data-nokia").value = "";
}
//lấy về tin nhắn đã gửi
function getNokiaMemoryAreaExport() {
    getArray(nokiaMemoryAreaExport, "output-nokia")
}
//lấy về tin nhắn đến
function takeToNokia() {
    getArray(nokiaMemoryAreaInput, "input-iphone")
}

//iphone active
function SendToNokia() {
    let inputIphone = document.getElementById("input-data-iphone").value;
    iphoneMemoryAreaInput.push(inputIphone);
    iphoneMemoryAreaExport.push(inputIphone);
    document.getElementById("input-data-iphone").value = "";
}
//lấy về tin nhắn đã gửi
function getiphoneMemoryAreaExport() {
    getArray(iphoneMemoryAreaExport, "output-iphone");
}
//lấy về tin nhắn đến
function takeToIphone() {
    getArray(iphoneMemoryAreaInput, "input-nokia");
}






