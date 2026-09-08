var prompt = require('prompt-sync')();

let rectangle = {
    length: 10,
    width: 5
};

function calculateArea(rectangle) {
    let area = rectangle.length * rectangle.width;
    return area;
}

console.log(calculateArea(rectangle));



