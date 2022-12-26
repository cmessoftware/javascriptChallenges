

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars) 

//cars = [];
cars[0]= "VW";
cars[1]= "Fiat";
cars[2]= "Ford";
console.log(cars)

let car = cars[0];  //El primer indice es el cero.

console.log(car)

cars[0] = "Opel";

console.log(cars)

//Arreglos con items de diferentes tipos
const person = ["John", "Doe", 46];

console.log(person)

//Build in functions
console.log(cars.length)   // Returns the number of elements
console.log(cars.sort())   // Sorts the array


let fruits = ["Banana", "Orange", "Apple", "Mango"];

//Los ordeno en fomra ascendente
fruits.sort()

//Primer elemento
let fruit = fruits[0];
console.log(fruit)

fruit = fruits[fruits.length - 1];
//Ultimo elemento
console.log(fruit)

//Extraigo primero elemento
let ultimo = fruits.pop()
console.log(`${ultimo} | ${fruits}`)

//Extraigo ultimo elemento
let primero = fruits.shift()
console.log(`${primero} | ${fruits}`)

//rearmo el array
fruits.concat([primero, ultimo])
fruits.sort()

console.log(fruits)

//Recorrer el array

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

let r = fruits.includes("Mango")

fruits.forEach(function(f){
  console.log(f)
})

fruits.forEach( (f) => {
  console.log(f)
} )

fruits.forEach( f => console.log(f))

//Agregar elementos
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
fruits.forEach( f => console.log(f))

//Usando indices no numericos

const persons = [];
persons["firstName"] = "John";
persons["lastName"] = "Doe";
persons["age"] = 46;

console.log(persons)
console.log(person.length);     // Will return 0
console.log(person[0]);         // Will return Jhon

//Concatenar los elementos
console.log( fruits.join(" * "))

for (let index = 0; index < fruits.length; index++) {
  let element = fruits[index];
  element += " * "
  
}

//Saca un elemento del princio

let elem = fruits.shift("Lemon");
console.log(fruits)

//Coloca un elemento al ppio
fruits.unshift("Lemon");
console.log(fruits)

//The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(fruits)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)
fruits.reverse();
console.log(fruits)

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

const points = [40, 100, 1, 5, 25, 10];
points.sort( (a, b) => a - b);
console.log(points)

//Iteration with map

const numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2)

numbers2 = numbers1.map( value => value * 2);

console.log(numbers2)

