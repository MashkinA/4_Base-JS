let expenses = [];
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
const resetBtnNode = document.getElementById('reset_btn');

initWallet();

btnNode.addEventListener('click', function() {
    expense = getExpenseByUser();
    if (!expense) {
        return;
    };
    
    trackExpense(expense);
    
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
    return expense;
};
    function clearInput() {
        inputNode.value = '';
    };

function trackExpense(expense) {
    expenses.push(expense);
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
            sum += element;
        });
        return sum;
    };

    function renderHistory (expenses) {
        let expensesListHTML = '';
        expenses.forEach(element => {
            expensesListHTML += `<li>${element} ${currensy}</li>`;
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



    
