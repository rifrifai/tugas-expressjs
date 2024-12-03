// var, let and const
let age = 20;
age = 23;
const nama = "John Doe";
// name = "Jane Doe"; //error
var x = 10;
console.log(age);
console.log(nama);
console.log(x);

// data primitif
let text = "Halo Indonesia!";
let num = 1000;
let isTrue = true;
let data = null;
let notDefined = undefined;

// data non primitif
let cars = {
  name: "Ford",
  year: 2020,
  color: "red",
};
let motors = ["yamaha", "honda", "kawasaki"];
console.log(cars);

// operator aritmatika
let a = 7;
let b = 5;
let total = a + b;
let perbedaan = a - b;
let perkalian = a * b;
let pembagian = a / b;
let modulus = a % b;
let pangkat = a ** b;
console.log(modulus);
console.log(pangkat);

// operator perbandingan
let y = 100;
let z = "100";
console.log(y == z);
console.log(y === z);
console.log(y != z);
console.log(y !== z);
console.log(y > z);
console.log(y < z);
console.log(y >= z);
console.log(y <= z);

// operator logika
let isBenar = true;
let isSalah = false;
console.log(isBenar && isSalah);
console.log(isBenar || isSalah);
console.log(!isBenar);
