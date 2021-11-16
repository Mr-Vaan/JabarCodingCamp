// MUHAMMAD IVAN CHRIANA - JABAR CODING CAMP
// SOAL KE 1
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'Sukses Melihat masa depan', timeSpent: 3000}, 
    {name: 'Lord of The Rings', timeSpent: 2000}, 
    {name: 'Theory of Everythings', timeSpent: 4000},
    {name: 'Cara Bersikap Bodo amat', timeSpent: 1000}
]
// JAWABAN
// Tulis code untuk memanggil function readBooks di sini
// lanjutkan code pada index.js untuk memanggil function readBooks. Buku yang akan dihabiskan adalah buku-buku di dalam array books. Pertama function readBooks menerima input waktu yang dimiliki yaitu 10000 ms (10 detik) dan books pada indeks ke-0. Setelah mendapatkan callback sisa waktu yang dikirim lewat callback, sisa waktu tersebut dipakai untuk membaca buku pada indeks ke-1. Begitu seterusnya sampai waktu habis atau semua buku sudah terbaca. Untuk melihat output, jalankan file index.js dengan node js :
function baca(time, books, i) {
    if (i < books.length) {
        readBooks(time, books[i], function(sisa) {
            if (sisa > 0) {
                i += 1;
                baca(sisa, books, i);
            }
        } )
    }
}
baca(10000, books,0)













