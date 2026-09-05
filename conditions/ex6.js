var prompt = require('prompt-sync')();

let number = Number( prompt("enter a number "));


if (number < 0) {

    console.log("negative") 
}

else if (number > 0) {

    console.log("positive")

}
else {

    console.log("zero")
}


