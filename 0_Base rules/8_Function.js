// Функция

const c = 6;

// Создание функции

function sayHi() {
    console.log('Hello');    
}

sayHi();

// Передача параметров

sum(1, '3');

function sum(a, b) {
    const result = a + b;
    console.log(result);
    console.log(result + c);
}

// Возвращение значений

const name = 'bob';
const surname = 'smith';
const fn = fullname(name, surname);

console.log(fn);

function fullname(name, surname) {
    return `${name} ${surname}`;
    
}

// 

const myage = 24;
const cbf = adult(myage);

console.log(cbf);

function adult(age) {
    return age > 18;
}