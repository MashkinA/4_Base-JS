// 1

printNumbers ();

function printNumbers() {
    for (let a = -10; a <= 10; a++) {
        console.log(a);        
    }
};

// 2

const fnStart = -3
const fnEnd = 5

printNumbersByRange(fnStart, fnEnd);

function printNumbersByRange(start, end) {
    for (let a = start; a <= end; a++) {
        console.log(a); 
    }
};

// 3

const num = [0,2,5,8,9];

calculateNumbersSum (num);

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

const name1 = 'bob';
const surname1 = 'smith';
const age1 = 29;

console.log(createPerson(name1, surname1, age1));

function createPerson(name, surname, age) {
    const person = {
        name: name,
        surname: surname,
        age: age
    }
    return person;
};

// 6

const name2 = 'ban';
const surname2 = 'walker';
const age2 = 15;

const name3 = 'jack';
const surname3 = 'gill';
const age3 = 46;

people = [
    createPerson(name1, surname1, age1),
    createPerson(name2, surname2, age2),
    createPerson(name3, surname3, age3),
];

console.log(findOldest (people));

function findOldest(people) {
    
    let oldest = {
        name: null,
        age: null,
    };
       
    for (let index = 0; index < people.length; index++) {
        if (people[index].age > oldest.age) {
            oldest = {
                name: people[index].name,
                age: people[index].age,
            };
        };
    };
    return oldest.name;
    
}


