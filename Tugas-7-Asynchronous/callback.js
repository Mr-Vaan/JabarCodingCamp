// MUHAMMAD IVAN CHRIANA - JABAR CODING CAMP
// SOAL KE 1
// Kita mempunyai tumpukan buku untuk dibaca. Setiap buku memiliki waktu yang dibutuhkan untuk menghabiskan buku tersebut. Sudah disediakan function readBooks yang menerima tiga parameter: waktu, buku yang dibaca, dan sebuah callback. Salin code berikut ke dalam sebuah file bernama callback.js .
// di callback.js
function readBooks(time, book, callback ) {
    console.log(`Saya Membaca Buku ${book.name}`)
    setTimeout(function(){
        let sisaWaktu = 0
        if(time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log(`Saya Sudah Selesai Membaca Buku ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)
}
 
module.exports = readBooks 




























