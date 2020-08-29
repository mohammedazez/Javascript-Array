// MANIPULASI ARRAY
//1. Menambah elemen array
const arr = ["a", 1, true];
console.log(arr); // menampikan semuanya
console.log(arr[1]); // menampilan index ke 1 yaitu 1 didalam array

const arr1 = [];
arr1[0] = "Muhamad"; // menambahkan isi array
arr1[1] = "Aziz";
arr1[2] = "Devia";
console.log(arr1);

//2. Menghapus elemen pada array
const arr3 = ["Muhamad", "Aziz", "Devia"];
arr3[1] = undefined;
console.log(arr3);

//3. Menampilkan seluruh isi array
let arr4 = ["Muhamad", "Aziz", "Devia"];

for (let i = 0; i < arr4.length; i++) {
  console.log("Mahasiswa ke-" + (i + 1) + " : " + arr4[i]); // Menggunakan Looping
}

//Method pada Array
// 1. join - Menambahkan data
const arr5 = ["Muhamad", "Aziz", "Devia"];
console.log(arr5.join(" - "));

// 2. push - Menambahkan elemen array di akhir array
const arr6 = ["Muhamad", "Aziz", "Devia"];
arr6.push("Kezia");
console.log(arr6.join(" - "));

// 3. pop - Menghapus elemen array di akhir array
const arr7 = ["Ironman", "Superman", "Spiderman"];
arr7.pop();
console.log(arr7.join(" - "));

// 4. unshift - Menambahkan elemen array di awal array
const arr8 = ["Ironman", "Superman", "Spiderman"];
arr8.unshift("Batman");
console.log(arr8.join(" - "));

// 5. shift - Menghapus elemen array di akhir array
const arr9 = ["Ironman", "Superman", "Spiderman"];
arr9.shift();
console.log(arr9.join(" + "));

// 6. splice - menambahkan dan menghapus elemen array di tengah array
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, . . . )
const arr10 = ["Ironman", "Superman", "Spiderman"];
arr10.splice(2, 0, "Batman", "Hulk");
console.log(arr10.join(" + "));

const arr11 = ["Ironman", "Superman", "Spiderman"];
arr11.splice(1, 2, "Wonderwomen", "Panther");
console.log(arr11.join(" + "));

// 7. slice -
// slice(awal, akhir)
var arr12 = ["Ironman", "Superman", "Spiderman", "Wonderwomen", "Panther"];
var arr13 = arr12.slice(1, 3);
console.log(arr12.join(" + "));
console.log(arr13.join(" - "));

// 8. forEach
// 9. Map
