// Benzin istasyonu uygulamasi

let dizel = 24.53, benzin = 22.25, lpg = 11.1;

const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-LPG" + yeniSatir
    + "Yakıt Türünü Seciniz";

let yakitTipi = prompt(yakitMetni);


if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {

    let yakitLitresi = Number(prompt("Yakit Litresini Giriniz"));
    let bakiye = Number(prompt("Bakiyenizi Giriniz"));

    if (yakitTipi == 1) {
        // DİZEL
        let odenecekTutar = dizel * yakitLitresi;
        if (odenecekTutar < bakiye) {
            // bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("yakıt alma islemi basarili") + yeniSatir
                + "Kalan Bakiye :" + bakiye
        } else {
            // bakiye yeteli degil
            alert("bakiyeniz yeteli degil !" + yeniSatir
                + "odenecek tutar:  " + odenecekTutar + yeniSatir
                + "bakiye:  " + bakiye + yeniSatir
                + "eksik tutar :  " + (odenecekTutar - bakiye)
            )
        }
    } else if (yakitTipi == 2) {
        // BENZİN
        let odenecekTutar = benzin * yakitLitresi;
        if (odenecekTutar < bakiye) {
            // bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("yakıt alma islemi basarili") + yeniSatir
                + "Kalan Bakiye :" + bakiye
        } else {
            // bakiye yeteli degil
            alert("bakiyeniz yeteli degil !" + yeniSatir
                + "odenecek tutar:  " + odenecekTutar + yeniSatir
                + "bakiye:  " + bakiye + yeniSatir
                + "eksik tutar :  " + (odenecekTutar - bakiye)
            )
        }
    } else if (yakitTipi == 3) {
        // LPG
        let odenecekTutar = lpg * yakitLitresi;
        if (odenecekTutar < bakiye) {
            // bakiyeniz yeterli
            bakiye = bakiye - odenecekTutar;
            alert("yakıt alma islemi basarili") + yeniSatir
                + "Kalan Bakiye :" + bakiye
        } else {
            // bakiye yeteli degil
            alert("bakiyeniz yeteli degil !" + yeniSatir
                + "odenecek tutar:  " + odenecekTutar + yeniSatir
                + "bakiye:  " + bakiye + yeniSatir
                + "eksik tutar :  " + (odenecekTutar - bakiye)
            )
        }
    }
} else {
    alert("geçerli bir Sayi giriniz")
}