let expenses = [];
let limit = 10000;
const currensy = 'руб.';
const statusPositive = 'Все хорошо';
const statusNegative = 'Лимит превышен';

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');
const historyNode = document.getElementById('history')
const sumNode = document.getElementById('sumer');
const limitNode = document.getElementById('limit');
const statusNode = document.getElementById('status');
const resetBtnNode = document.getElementById('reset_btn');
const categorySelectNode = document.getElementById('select');
const limitBtnNode = document.getElementById('changeLimit');

initWallet();

btnNode.addEventListener('click', function() {
    const fullExpense = getExpenseByUser();
    if (!fullExpense) {
        return;
    };
    
    trackExpense(fullExpense);
    
    render(expenses);
});

limitBtnNode.addEventListener('click', function() {
    const new_limit = prompt('Введите новый лимит');
    if (!new_limit) {
        return;
    };
    const new_limit_value = parseInt(new_limit);

    limitNode.innerText = new_limit_value;
    limit = new_limit_value;

    render(expenses);
});

resetBtnNode.addEventListener('click', function() {
    expenses = [];
    historyNode.innerHTML = '';
    initWallet();
});

function initWallet() {
    limitNode.innerText = `${limit} ${currensy}`;
    sumNode.innerText = `-`;
    statusNode.innerText = `Не определено`;
};

function getExpenseByUser() {
    if (!inputNode.value) {
        return;
    }
    const expense = parseInt(inputNode.value);
    clearInput();

    const currentCategory = getSelectedCategory();
    if (currentCategory === 'Категория') {
        return;
    }
    const fullExpense = {
        amount: expense,
        category: currentCategory,
    };

    return fullExpense;
};
    function clearInput() {
        inputNode.value = '';
    };

function trackExpense(a) {
    expenses.push(a);
};

function render(expenses) {
    sum = calculate(expenses);
    renderHistory(expenses);
    renderSum(sum);
    renderStatus(sum);
};

    function calculate(expenses) {
        let sum = 0;
        expenses.forEach(element => {
            sum += element.amount;
        });
        return sum;
    };

    function renderHistory (expenses) {
        let expensesListHTML = '';
        expenses.forEach(element => {
            expensesListHTML += `<li>${element.amount} ${currensy} - ${element.category}</li>`;
        });

        historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
    };

    function renderSum(sum) {
        sumNode.innerText = `${sum} ${currensy}.`;
    };

    function renderStatus(sum) {
        if (sum <= limit) {
            statusNode.innerText = statusPositive;
            statusNode.classList.add('status_green');
        } else {
            statusNode.innerText = `${statusNegative} (${limit - sum}) ${currensy}`;
            statusNode.classList.add('status_red');
        };
    };
    function getSelectedCategory() {
        return categorySelectNode.value;
    };




    
