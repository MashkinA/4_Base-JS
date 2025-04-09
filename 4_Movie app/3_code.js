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
    console.log(list);
});

function init() {
    const listFromStorageStr = localStorage.getItem('list');
    const listFromStorage = JSON.parse(listFromStorageStr);
    list = listFromStorage;
    if (!list) {
        list = [];
    }
    console.log(list);
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
        ListHTML += `<li>${element}</li>`;
    });
    listNode.innerHTML = `<ol>${ListHTML}</ol>`;
    console.log(a);
};