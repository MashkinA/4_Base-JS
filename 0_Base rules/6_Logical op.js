// Логические операторы

const homeworkdone = true;
const roomclean = false;
const approved = true;
let canbefree;

// И &&

canbefree = homeworkdone && roomclean;
console.log(canbefree);

// или ||

canbefree = homeworkdone || roomclean;
console.log(canbefree);

// НЕ !

canbefree = homeworkdone || !roomclean;
console.log(canbefree);

// Комбинирование

canbefree = (homeworkdone || !roomclean) && approved;
console.log(canbefree);