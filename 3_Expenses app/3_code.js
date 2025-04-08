const expenses = [];
const limit = 10000;

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');
const historyNode = document.getElementById('history')
const sumNode = document.getElementById('sumer');
const limitNode = document.getElementById('limit');
const statusNode = document.getElementById('status');

//
limitNode.innerText = limit;
//

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
        expensesListHTML += `<li>${element} руб.</li>`;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
    //
    let sum = 0;
    expenses.forEach(element => {
        sum += element;
    });
    sumNode.innerText = `${sum} руб.`;
    
    //
    if (sum <= limit) {
        statusNode.innerText = `Все хорошо`;
    } else {
        statusNode.innerText = `Лимит превышен`;
    };
});
    
    
