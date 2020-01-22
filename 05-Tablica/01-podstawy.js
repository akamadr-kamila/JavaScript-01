/*
Stwórz tablicę z listą swoich ulubionych owoców. Następnie:

  1.Wypisz pierwszy owoc w konsoli.
  2.Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
  3.W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).
*/

/*

Napisz funkcję printMyTable(array), która przyjmuje tylko jeden parametr – tablicę.
Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.

*/

owoce = ['Jagody', 'Truskawki', 'Banany', 'Jabłka', 'Mandarynki'];

console.log( owoce[0] );
console.log( owoce[owoce.length-1] );

function wypiszOwoce( owoce ) {
  for ( i = 0; i < owoce.length; i++ ) {
    console.log( owoce[i] );
  }
}

wypiszOwoce( owoce );