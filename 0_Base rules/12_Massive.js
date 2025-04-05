// Массивы



// Объявление массива

const number = 4;
const names = [
1,
2,
3,
number
];
console.log(names);

// Чтение данных из массива

console.log(`Вывод из массива элемента с номером 2: ${names[2]}`);
console.log(`Сколичество элементов массива: ${names.length}`);

// Проход по элементам массива

for (let index = 0; index < names.length; index++) {
    const num = names[index];
    console.log(num);
}

// for и foreach

PrintNames (names);

function PrintNames (name) {
    name.forEach(function(item, index) { 
        console.log(item, index)
        }
    );
}

// Поиск элемента в массиве

find3 (names);

function find3 (name) {
    name.forEach(function(item, index) {
        if (item === 3) {
            
        console.log(`${index} - Порядковый номер искомого числа`)
            
        } 
        }
    );
}