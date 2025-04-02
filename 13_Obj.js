// Объекты


// Объявление объекта

const person = {
    name: 'bob',
    surname: 'smith',
    age: 29,
    city: 'Msk',
    Birth_city: 'Spb',
    Getfullname: function() {
        return `${this.name} ${this.surname}`
    }
};

console.log(person.Getfullname());

// Поля объекта

console.log(person.Birth_city);

// Методы объекта


// Массив объектов

const people = [
    {
        name: 'bib',
        surname: 'smoth',
        age: 31,
        city: 'Vlg',
        Birth_city: 'Msk'
    },
    {
        name: 'bob',
        surname: 'smith',
        age: 29,
        city: 'Msk',
        Birth_city: 'Spb'
    }
];

// Перебор массива объектов

people.forEach(man => {
    console.log(man.name, man.age)
});