const expenses = [];
const limit = 10000;
const currensy = 'руб.';
const statusPositive = 'Все хорошо';
const statusNegative = 'Лимит превышен';

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');
const historyNode = document.getElementById('history')
const sumNode = document.getElementById('sumer');
const limitNode = document.getElementById('limit');
const statusNode = document.getElementById('status');


initWallet();

function initWallet() {
    limitNode.innerText = `${limit} ${currensy}`;
    sumNode.innerText = `-`;
    statusNode.innerText = `Не определено`;
};


btnNode.addEventListener('click', function() {
    if (!inputNode.value) {
        return;
    }
    const expense = parseInt(inputNode.value);
    inputNode.value = '';
    //
    expenses.push(expense);
    //
    let expensesListHTML = '';
    expenses.forEach(element => {
        expensesListHTML += `<li>${element} ${currensy}</li>`;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
    //
    let sum = 0;
    expenses.forEach(element => {
        sum += element;
    });
    sumNode.innerText = `${sum} ${currensy}.`;
    
    //
    if (sum <= limit) {
        statusNode.innerText = statusPositive;
        statusNode.classList.add('status_green');
    } else {
        statusNode.innerText = statusNegative1;
        statusNode.classList.add('status_red');
    };
});
    
    
