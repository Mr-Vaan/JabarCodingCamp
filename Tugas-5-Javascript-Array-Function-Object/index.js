//SOAL 1
//Buatlah variable seperti :
//var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
//Urutkan array di atas dan tampilkan datanya(hewannya saya pake bahasa jepang hehe)
var daftarHewan = ["2. Tori(Burung)", "5. Inu(Anjing)", "3. Sakana(Ikan)", "4. Unagi(Belut)", "1. Neko(Kucing)"];
for (var i = 1; i < daftarHewan.length; i++){
    for (var j = 0; j < i; j++){
        if (daftarHewan[i] < daftarHewan[j]) {
          var x = daftarHewan[i];
          daftarHewan[i] = daftarHewan[j];
          daftarHewan[j] = x;
        }
    }
}
console.log('Berikut Beberapa Hewan Dalam Bahasa Jepang :');
for (var e = 0; e < daftarHewan.length; e++) console.log(daftarHewan[e]);
console.log('\n')

// SOAL KE 2
// JAWABAN
var data = {name : "Ivan" , age : 19 , address : "Cirebon" , hobby : "Game" }

function introduce(perkenalan) {
    var nama = perkenalan.name 
    var umur = perkenalan.age
    var alamat = perkenalan.address
    var hobi = perkenalan.hobby
    return "Nama saya " + nama +  "," + " umur saya " + umur + " tahun," + " Alamat saya di " + alamat + "," + " dan saya punya hobby yaitu " + hobi
}
var perkenalan = introduce(data)
console.log(perkenalan)

//SOAL KE 3
//JAWABAN
 // 3 2
 console.log("----------------------------------------")
 function hitung_huruf_vokal(dataVokal){
    var count = 0;
    var hurufVokal = dataVokal.toLowerCase().split('');
    for(var i = 0; i < hurufVokal.length; i++){
        if(hurufVokal[i] == 'a' || hurufVokal[i] == 'i' || hurufVokal[i] == 'u' || hurufVokal[i] == 'e' || hurufVokal[i] == 'o'){
            count += 1;
        }
    }
    return count;
}
var hurufVokal1 = hitung_huruf_vokal("Muhammad") // Hasilnya akan 3 karena huruf vokalnya adalah : u,a,a
var hurufVokal2 = hitung_huruf_vokal("Ivan") // Hasilnya akan 1 karena huruf vokalnya adalah : a
var hurufVokal3 = hitung_huruf_vokal("Chriiana") // Hasilnya akan 2 karena huruf vokalnya adalah : u,a
 // Hasilnya akan 3 karena huruf vokalnya adalah : i,a,i
console.log('Huruf Vokal Pada Nama Saya Ada : \n ', hurufVokal1 , hurufVokal2, hurufVokal3, '\n Pada Masing - Masing Setiap Kata')
console.log("----------------------------------------")
// SOAL 4
// JAWABAN
function hitung(angka) {
    return  angka * 2 - 2;
}

console.log( hitung(0))
console.log( hitung(1))
console.log( hitung(2))
console.log( hitung(3))
console.log( hitung(5))

























