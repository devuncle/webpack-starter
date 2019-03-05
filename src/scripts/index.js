import '../styles/index.scss';

console.log('webpack starterkit!!!!!!!!!');


//******* let and var */

const carID = 4 ;
//carID =122;
console.log(car);
var car = 'sfe';

if (true) {
    var car9 = 2;
    console.log(car9);
}

console.log(car9);

console.log('-----------------------------');
//******  Rest Parameters */

function sendCars(...allCarIds) {
    allCarIds.forEach( id=> console.log(id));
}

sendCars(11,23,344,54);


console.log('-----------------------------');
//******  Destructuring Arrays */
let carID1s = [100, 200, 300, 44];
let [car1, car2, ...restIDs] = carID1s;

console.log(car1, car2, restIDs);


console.log('---------------Destructuring Objects--------------');
//******  Destructuring Objects */
let car04 = {id: 5000, style: 'convertible'};
let { style, id} = car04;

console.log(id, style);

console.log('---------------Spread Syntax--------------');
function startCars(car1, car2, car3) {
    console.log(car1, car2,car3);
}

let carId2s = [1,2,3,5,4];
startCars(...carId2s);

console.log('---------------typeof()--------------');

console.log('-----------common type conversions-----------------');
//convert to string
let foo = {id: 'fefe', n: 343};
console.log( foo.toString() );

console.log( Number.parseInt('55'));
Number.parseFloat('44.23');

for (let i = 0; i<5; i++) {
    if (i === 2)
        continue;
    console.log(i);
}