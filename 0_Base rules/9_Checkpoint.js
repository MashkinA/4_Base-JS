// 1

multiple(2.5, 3);

function multiple(a, b) {
    const result = a * b;
    console.log(result);
}

// 2

const day = 3;
const month = 6;
const year = 2023;
buildDate(day, month, year);

function buildDate(day, month, year) {
    const date = `${day}/${month}/${year}`;
    console.log(date);
}

// 3

const age = 17;
isAdult(age);

function isAdult(age) {
    const result = (age >= 18);
    console.log(result);
}

// 4

const month11 = 5;
getMonthByNumber(month11);

function getMonthByNumber(monthnumber) {
    
    switch (monthnumber) {
        case (monthnumber = 1):
            console.log('Январь');
            break;
        case (monthnumber = 2):
            console.log('Февраль');
            break;
        case (monthnumber = 3):
            console.log('Март');
            break;
        case (monthnumber = 4):
            console.log('Апрель');
            break;
        case (monthnumber = 5):
            console.log('Май');
            break;
        case (monthnumber = 6):
            console.log('Июнь');
            break;
      }
}

// 5

const rub = 10;
const othervalue = 'AED';

convertRub(rub, othervalue);

function convertRub(valuerub, currency) {
    
    switch (currency) {
        case 'USD':
            const USD = (valuerub * 100);
            console.log(USD);
            break;
        case 'EUR':
            const EUR = (valuerub * 90);
            console.log(EUR);
            break;
        case 'KZT':
            const KZT = valuerub*0.17;
            console.log(KZT);
            break;
        case 'AED':
            const AED = valuerub*23;
            console.log(AED);
            break;
      }
}