let data = "";
let board = [];
for (let i = 0; i < 5; i++) {
    board[i] = new Array(0,0,0,0,0);
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp&nbsp&nbsp";
    }
    data += "<br/>";
}
data += "<br><br/><input type='button' value='Change Value' onClick='changeValue()'>"
document.getElementById("carogame").innerHTML = data;

function changeValue() {
    let x = +prompt("Input X");
    let y = +prompt("Input Y");
    board[x][y] = "x";
    data = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp&nbsp&nbsp";
        }
        data += "<br/>";
    }
    data += "<br><br/><input type='button' value='Change Value' onClick='changeValue()'>"
    document.getElementById("carogame").innerHTML = data;
}