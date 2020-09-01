const angka = [3, 5, 7, 9, 11];
const angka2 = angka.map(function (nomor) {
  return nomor * 5;
});

console.log(angka2.join(" - "));
