let player1 = new Player("X", true);
let player2 = new Player("O", false);

let myArray = [];
let rowMyArray = [];
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        rowMyArray[j] = `<div id="${i},${j}" class="row" onclick="ticker(${i}${j})"></div>`;
    }
    myArray[i] = rowMyArray;
    rowMyArray = [];
}
console.log(myArray[1][1]);

let data = "";
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
        data += myArray[i][j];
    }
    data += "</br>";
}
document.getElementById("game").innerHTML = data

function ticker(n){
    if (player1.status){
        document.getElementById(`${n}`).innerHTML = player1.tick();
        player1.status = false;
        player2.status = true;
    } else {
        document.getElementById(`${n}`).innerHTML = player2.tick();
        player2.status = false;
        player1.status = true;
    }

}


