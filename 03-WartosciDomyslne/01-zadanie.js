/*
###  Dodaj wartość domyślną dla a 5 a dla b 8
*/

function add(a, b) {
  if ( typeof a === 'undefined' )
    a = 5;

  if ( typeof b === 'undefined' )
    b = 8;

  return a + b
}

console.log(add() === 13 ? 'Brawo' : 'Niestety');