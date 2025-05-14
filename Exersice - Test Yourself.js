let hour = 23;
if(hour >= 6 && hour >= 12) {
    console.log('Good morning')
}
if(hour >= 13 && hour >= 17) {
    console.log('Good afternoon')
}
if(hour >= 18) {
    console.log('Good night')
}
if (hour >=20){
    console.log('Muaddh is a good person')
}

let name = 'Muaddh'

if (true){
    console.log(`Good morning ${name}`)
}

let age = 6;

if(age || isholiday){
console.log('discount')

}else if (true) {
console.log('You must to be')
}
if (age < 65 ){
console.log('No discount');
}

const isholiday = true;

let number = Math.random(1);
let result = 1 
if (number < 0.5) {
    console.log('head')
}
if (number > 0.5){
    console.log('tail')
}

let guess = 'head';

const results = true ? 'you win' : 'falsy'
console.log(results);
const resultss = 0 ? 'truthy' : 'you lose'
console.log(resultss);