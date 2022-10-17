// MUHAMMAD IVAN CHRIANA

//Soal 1

var kalimat_1 = "Halo Nama Saya Muhammad Ivan Chriana"
var kalimat_2 = "Saya Ivan"

function jumlahKata(string) {
    var pemisah = string.split(' ').filter((kata) => {if (kata !==' ')
    return kata;
    })
    return pemisah.length;
}

var kalimat = "Nama Saya Muhammad Ivan Chriana"
var hasil = jumlahKata(kalimat)
console.log(kalimat + '| Kata Pada Kalimat di samping adalah ' + hasil + '\n')


// Soal 2
var tanggal = 30
var bulan = 1
var tahun = 2021

function tanggalBesok(tanggal, bulan, tahun){
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Desember"];
    var SelectMonth = months[bulan-1];
    var fusion = SelectMonth + '/' + tanggal.toString() + '/' + tahun.toString();
    var s = new Date(fusion);
    s.setDate(s.getDate() +1);
    return `${s.getDate()} ${months[s.getMonth()]} ${(s.getFullYear())}`;
}
var hasilSoalDua = tanggalBesok(tanggal, bulan, tahun);
console.log(hasilSoalDua);











