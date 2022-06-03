// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// block
{
  // simply the lines of code inside { }
  // it group the lines into group
  // They are used where js need single line of code
}
// eg :

if (true) console.log('1, Working');
// this allow single line after if() condition

// code eg :
// if (true) return 10;
// console.log('2, Working');
// console.log('3, Working');

// code explanation
// This lines are not exicuted
// here multiple line is allowded but when we put return nothing works after it these is because  here it act as
// if (true) {
//   return 10
//   console.log('2, Working');
//   console.log('3, Working');
//   if (true) {
//     console.log('4, working');
//     console.log('5, working');
//     console.log('6, working');
//   }
// }

//  so we group the lines of code into block in js
// eg :

// like this


//  doubt !!!!!!!!!!!

if (true) {
  return 10;
  console.log('2, Working');
  console.log('3, Working');
}

if (true) {
  console.log('4, working');
  console.log('5, working');
  console.log('6, working');
}
