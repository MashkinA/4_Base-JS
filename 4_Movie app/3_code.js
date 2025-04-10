let film = '';

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('inputBtn');
const listNode = document.getElementById('list');

init();

btnNode.addEventListener('click', function(){
    getFilmFromUser();
    if (!film) {
        return;
    }
    trackFilm();
    renderlist();
});

function init() {
    const listFromStorageStr = localStorage.getItem('list');
    const listFromStorage = JSON.parse(listFromStorageStr);
    list = listFromStorage;
    if (!list) {
        list = [];
    };
    renderlist();
};
function getFilmFromUser() {
    if (!inputNode.value) {
        return;
    }
    film = inputNode.value;
    clearInput();
    };
function clearInput() {
    inputNode.value = '';
};
function trackFilm() {
    list.push(film);
    const listStr = JSON.stringify(list);
    localStorage.setItem('list', listStr);
};
function renderlist () {
    let ListHTML = '';
    list.forEach(element => {
        ListHTML += `<li class="list_string"><span class="string">${element}</span></li>`;
    });
    listNode.innerHTML = `<ol>${ListHTML}</ol>`;
};