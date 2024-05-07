alert("Sayı Tahmin Etme Oyunu Toplam 3 Hakkınız Var.")

let mSayi = parseInt(Math.random()*100)
console.log(mSayi)
let hak = 1
function tahminEt () {
    let oSayi = Number(prompt("Tahmini Sayiyi Gir"))

if (mSayi == oSayi) {
    alert ("kazandınız")
}else {
    if (hak ==3) {
        alert("kaybettiniz")
    } else {
        if (oSayi >  mSayi) {
            alert("kucuk gir")
        } else {
            alert("buyuk gir");
        }
        hak = hak + 1
        tahminEt()
    }
}
}

tahminEt()