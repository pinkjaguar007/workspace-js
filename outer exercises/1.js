var prompt = require('prompt-sync')();

let rows = Number(prompt("Enter the number of rows: "));
let columns = Number(prompt("Enter the number of columns: "));

for (let i = 0; i < rows; i++) {
    let line = "";

    for (let j = 0; j < columns; j++) {
        line += "*";
    }

    console.log(line);
}

