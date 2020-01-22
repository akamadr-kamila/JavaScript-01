
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
*/

function even_or_odd(number) {
  if ( number % 2 ) {
    return 'Odd';
  } else {
    return 'Even';
  }
}


//test funkcji
console.log( even_or_odd(2) === "Even" ? 'dobrze!' : 'coś trzeba poprawić') 
console.log( even_or_odd(1) === "Odd" ? 'dobrze!' : 'coś trzeba poprawić') 