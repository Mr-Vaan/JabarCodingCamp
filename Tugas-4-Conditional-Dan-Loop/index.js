// SOAL KE 1
// JAWABAN
var nilai = 68;

if (nilai >= 85) {
  console.log('Selamat!, Anda mendapatkan nilai A.');
} else if (nilai >= 75) {
  console.log('Anda mendapatkan nilai B.');
} else if (nilai >= 65) {
  console.log('Anda mendapatkan nilai C.');
} else if (nilai >= 55) {
  console.log('Anda mendapatkkan nilai D.');
} else if (nilai <= 55) {
  console.log('Anda mendapatkan nilai E.');
}

// SOAL KE 2
//JAWABAN
var tanggal = 06;
var bulan = 1;
var tahun = 2003;

switch (bulan) {
  case 1:
    console.log(tanggal, 'Januari', tahun);
    break;
}

// SOAL KE 3
// JAWABAN
var n = '';
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= i; j++) {
    n += '#';
  }
  n += '\n';
}
console.log(n);

var n = '';
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= i; j++) {
    n += '#';
  }
  n += '\n';
}
console.log(n);

// SOAL KE 4
// JAWABAN m = 10;
const kata = ['Programming', 'Javascript', 'VueJS'];
// Mendapatkan panjang dari array kata
let panjang = kata.length;
let index = 0;
let nomor = 1;
masukan = 10;
while (nomor <= masukan) {
  console.log(nomor + ' - I love ' + kata[index]);
  index += 1;
  nomor += 1;

  // Jika index sama dengan panjang kata, kembalikan ke index 0
  // Dan tampilkan #####
  if (index == panjang) {
    console.log('='.repeat(nomor - 1));
    index = 0;
  }
}
