/*
Simple, remove the spaces from the string, then return the resultant string.
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
*/


function noSpace(x){
   return x.replace( /\s/g, '' );
}


console.log(  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') === '8j8mBliB8gimjB8B8jlB');
