/*
Mapowanie

W zmiennej result jest tablica z nazwami z dużych liter (uppercase)
*/

const ex2 = ["Java", "Javascript", "Python", "C++"];
let ex2_result = ex2.map( function( item ) {
  return item.toUpperCase();
});

console.log(ex2_result);//[ 'JAVA', 'JAVASCRIPT', 'PYTHON', 'C++' ]


/*

  Zadanie 2:
  Dla każdego obiektu dodaj klucz onStock z wartością true
  onStock : true
*/
const basket = [
    {name: 'Buty Nike', price: 120},
    {name: 'Koszulka Adidas', price: 10},
    {name: 'Skarpetki z Batmanem', price: 19}
    ];

let ex3_result = basket.map( function( item ) {
  item.onStock = true;
  return item;
});

console.log( basket );