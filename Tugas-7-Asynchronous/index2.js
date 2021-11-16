// MUHAMMAD IVAN CHRIANA - JABAR CODING CAMP
// SOAL KE 2
// Masih di folder yang sama dengan promise.js, buatlah sebuah file dengan nama index2.js. Tuliskan code sebagai berikut
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'B.J Habibie', timeSpent: 3000}, 
    {name: 'Apa itu Cinta', timeSpent: 2000}, 
    {name: 'Secret of Key', timeSpent: 4000},
    {name: 'One Piece', timeSpent: 1000}
]
 
// JAWABAN
// Lanjutkan code untuk menjalankan function readBooksPromise 
//Lakukan hal yang sama dengan soal no.1, habiskan waktu selama 10000 ms (10 detik) untuk membaca semua buku dalam array books.!
// Petunjuk !!
// Untuk mengerjakan soal di atas , tidak perlu dilooping, cukup panggil satu satu elemen tiap array nya : books[0] , books[1] , dst.
// Gunakan sisa waktu membaca books[0] untuk membaca books[1], kemudaian sisa waktu membaca books[1] untuk membaca books[2], dst.
 
var booksQueue = books.length;
var time = 10000;

function execute(time, date, booksQueue) {
    readBooksPromise(time, books[date])
        .then(function (remainingTime) {
            time = remainingTime;
            booksQueue = booksQueue - 1;
            if (booksQueue > 0) {
                execute(time, date+1, booksQueue);
            }
        })
}

execute(time, 0, booksQueue);
