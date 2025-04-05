let button = document.querySelector('.counter_button');
let counter = 0;
let counterText = document.querySelector('.counter_p')

let button_reset = document.querySelector('.counter_reset');

button.addEventListener('click', function () {
    counter += 1;
    counterText.innerText = counter;
});

button_reset.addEventListener('click', function () {
    counter = 0;
    counterText.innerText = counter;
});