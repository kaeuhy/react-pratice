// Quiz 01
let num = 100;

for (let idx = 0; idx <= num; idx++) {
    if (num % idx === 0) {
        console.log(idx);
    }
}

// Quiz 02
function isPrimeNumber(num) {
    for (let idx = 2; idx < num; idx++) {
        if(num % idx === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// Quiz 03
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log(result);
}

calculate(5, 3, add);
calculate(5, 3, subtract);



