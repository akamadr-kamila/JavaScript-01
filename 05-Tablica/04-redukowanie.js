/*
  Redukowanie
*/

/*
Zad 1.
W zmiennej result jest suma długości wszystkich elementów tablicy
*/
const ex3 = ["Java", "Javascript", "Python", "C++"];
let ex3_result = ex3.reduce( function( length, item) {
  return length += item.length;
}, 0 );

console.log(ex3_result);//23



/*
  Zad 2.

  W zmiennej totalPrice znajduje się suma wszystkich produktów z koszyka
*/


const basket = [
    {name: 'Buty Nike', price: 120},
    {name: 'Koszulka Adidas', price: 10},
    {name: 'Skarpetki z Batmanem', price: 19}
    ];

let totalPrice = basket.reduce( function(value, item) {
  return value += item.price;
}, 0 );

console.log(totalPrice);//149