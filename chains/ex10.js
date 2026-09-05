
var prompt = require('prompt-sync')();

let n = 5

let count = 0

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n; j++) {

        if ((i * j) % 3 == 0) {
            count++




        }
    }

}
console.log(count);



