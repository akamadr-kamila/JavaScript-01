/* 
  Filtrowanie

  W zmiennej result jest tablica z Java i Javascript
*/

const ex1 = ["Java", "javascript", "Python", "C++"];
let ex1_result = ex1.filter(function(item) {
  const regex = new RegExp( 'java', 'gi' );
  return regex.test( item );
});

console.log(ex1_result);//[ 'Java', 'javascript' ]


/*
  Zad 2.

  Wylitruj elementy droższe niż 10zł
*/


const basket = [
    {name: 'Buty Nike', price: 120},
    {name: 'Koszulka Adidas', price: 10},
    {name: 'Skarpetki z Batmanem', price: 19}
    ];

let ex3_result = basket.filter( function( item ) {
  return item.price <= 10;
});
console.log(ex3_result);