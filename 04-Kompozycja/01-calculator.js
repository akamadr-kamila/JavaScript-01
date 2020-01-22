/*

  Stwórz kalkulator który wykona następujące opcje:

   1. sprawdzi czy liczby które dostał są liczbami
   2. jako 3 argument przyjmie działanie czyli funkcję
   3. stwórz funkcję sum która doda dwie liczby i zwróci wynik
   3. stwórz funkcję divide która podzieli przez siebie
    dwie liczby i zwróci wynik ( upewnij się że nie podzielisz przez zero )
   4. gdy użytkownik spróbuje podzielić przez 0 wyświetl w konsli "To niemożliwe"
   5. Dodaj wartości domyślne dla parametrów funkcji tak żeby bez przekazanych argumentów 
   nie wystąpił błąd
   6**. dodatkowe: ustaw funkcje budujące kalkulator tak aby 
       przyjmowały w dodawaniu i odejmowaniu dowolną ilość liczb

*/

function sum() {
  let sum = 0;
  for ( i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function divide( a = 1, b = 1 ) {
  if ( 0 === b ) {
    throw new Error( 'To niemożliwe' );
  }
  return a / b;
}

function calculate( a = 1, b = 1, operation = sum ) {
  if ( typeof a !== 'number' || typeof b !== 'number' ) {
    throw new Error( 'Podaj poprawne liczby' );
  }

  if ( typeof operation === 'undefined' ) {
    throw new Error( 'Kalkulator nie obsługuje takiej operacji' );
  }

  return operation( a, b );
}

function calculator( a = 1, b = 1, operation = sum ) {
  try {
    return calculate( a, b, operation );
  } catch (e) {
    console.log( 'Wystąpił błąd: ' + e );
  }
}

console.log( calculator( 32, 15, sum ) );
console.log( sum( 3, 6, 9, 12 ) ) ;

