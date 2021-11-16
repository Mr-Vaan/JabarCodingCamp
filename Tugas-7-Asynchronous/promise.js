// MUHAMMAD IVAN CHRIANA - JABAR CODING CAMP
// SOAL KE 2
// Setelah no.1 berhasil, implementasikan function readBooks yang menggunakan callback di atas namun sekarang menggunakan Promise. Buatlah sebuah file dengan nama promise.js. Tulislah sebuah function dengan nama readBooksPromise yang me-return sebuah promise seperti berikut:
// di file promise.js
function readBooksPromise (time, book) {
    console.log(`Saya Mulai Membaca Buku ${book.name}`)
    return new Promise( function (resolve, reject){
      setTimeout(function(){
        let sisaWaktu = time - book.timeSpent
        if(sisaWaktu >= 0 ){
            console.log(`Saya Telah Selesai Membaca Buku ${book.name}, Sisa Waktu Saya ${sisaWaktu}`)
            resolve(sisaWaktu)
        } else {
            console.log(`Saya Sudah Tidak Punya Waktu Untuk Baca ${book.name}`)
            reject(sisaWaktu)
        }
      }, book.timeSpent)
    })
  }
   
  module.exports = readBooksPromise