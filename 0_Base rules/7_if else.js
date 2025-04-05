// Условия

const age = 17;
let weather = "rainy";
let time = "morning";

// Если (if)

if (age>18) {
console.log('Возраст подходит');
}

// Если, иначе (if else)

if (age>18) {
    console.log('Старше восемнадцати');
    } else {
       console.log('Младше восемнадцати'); 
    }

// Доп: if-else-if

if (weather === "rainy") {
    console.log("Еду на автобусе");
  } else if (time === "morning") {
    console.log("Еду на велике мимо пробок");
  } else {
    console.log("Еду на машине");
  }

// switch case

  let a = 1 + 2;

switch (a) {
  case 3:
    console.log('Мало');
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}