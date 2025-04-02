// 1

// printNumbers ();

function printNumbers() {
    for (let a = -10; a <= 10; a++) {
        console.log(a);        
    }
};

// 2

const fnStart = -3
const fnEnd = 5

// printNumbersByRange(fnStart, fnEnd);

function printNumbersByRange(start, end) {
    for (let a = start; a <= end; a++) {
        console.log(a); 
    }
};

// 3

const num = [0,2,5,8,9];

// calculateNumbersSum (num);

function calculateNumbersSum(numbers) {
    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    console.log(sum);
};

// 4

console.log(includes(num, fnEnd));

function includes(numbers, number) {
    let a = false;
    for (let index = 0; index < numbers.length; index++) {
        if (number === numbers[index]) {
            return a = true;
        }
    }
    return a;
};

// 5

const name = 'bob';
const surname = 'smith';
const age = 29;

console.log(createPerson(name, surname, age));

function createPerson(name, surname, age) {
    const person = {
        name: name,
        surname: surname,
        age: age
    }
    return person;
}



