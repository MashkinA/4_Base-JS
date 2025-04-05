// Ввод и вывод данных

// alert()

// confirm()

// promt()

const age = parseInt(prompt('Введите свой возраст'));

if (isAdult(age)) {
    alert('Вход подтвержден');
} else {
    alert('Вход запрещен');
}
function isAdult(age) {
    return age >= 18;
}