// MUHAMMAD IVAN CHRIANA
// SOAL  KE 1
// buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini.
// JAWABAN
const luas = (x, y) => x * y;
const keliling = (x, y) => 2 * (x + y);
console.log("Hitung Luas dan Keliling Persegi Panjang adalah : " + luas(10, 2) + " dan " + keliling(4, 2));


//SOAL KE 2
// Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana
 
// const newFunction = function literal(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       fullName: function(){
//         console.log(firstName + " " + lastName)
//       }
//     }
//   }
//   //Driver Code 
//   newFunction("William", "Imoh").fullName() 

// JAWABAN
const newFunction = (firstName, lastName) => {
    return {
        firstName, lastName, fullName() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}
console.log(newFunction("William", "Imoh").fullName())

// SOAL KE 3
// Diberikan sebuah objek sebagai berikut:

// const newObject = {
//     firstName: "Muhammad",
//     lastName: "Iqbal Mubarok",
//     address: "Jalan Ranamanyar",
//     hobby: "playing football",
//   }
//   dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
  
//   const firstName = newObject.firstName;
//   const lastName = newObject.lastName;
//   const address = newObject.address;
//   const hobby = newObject.hobby;
//   Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
  
// Driver code
//   console.log(firstName, lastName, address, hobby)
// JAWABAN
 const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }
  const {firstName, lastName,address,hobby} = newObject

  console.log(firstName, lastName, address, hobby)
// SOAL KE 4
// Kombinasikan dua array berikut menggunakan array spreading ES6

// const west = ["Will", "Chris", "Sam", "Holly"]
// const east = ["Gill", "Brian", "Noel", "Maggie"]
// const combined = west.concat(east)
// //Driver Code
// console.log(combined)
// JAWABAN
let west = ["Will", "Chris", "Sam", "Holly"]
let east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [...west, ...east]
console.log(combined)
// SOAL KE 5
// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:
// const planet = "earth" 
// const view = "glass" 
// var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet 
//JAWABAN
const planet = "earth"
const view = "glass"
var after = `Lorem ${view} dolor sit amet,
 consectetur adipiscing elit, ${planet} do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim
 ad minim veniam`
console.log(after)


