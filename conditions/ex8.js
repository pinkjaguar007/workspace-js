var prompt = require('prompt-sync')();

let grade = Number(prompt("enter your grade :"));


if (grade < 10) {

    console.log("failed")
}
else if (10 < grade && grade <= 12) {

    console.log("fair grade ")
}
else if (12 < grade && grade <= 14) {

    console.log("mention")
}
else if (14 < grade && grade<= 16) {

    console.log("mention bien ")
}
else if (16 < grade ) {

    console.log("mentions tres bien ")
}
