const expenses = [];

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');

btnNode.addEventListener('click', function() {
    if (!inputNode.value) {
        return;
    }
    const expence = parseInt(inputNode.value);
    expenses.push(expence);
    inputNode.value = '';

    console.log(expenses);
});