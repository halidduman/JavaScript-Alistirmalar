//  harf sayi uygulamasi

// ? burda metinde secilen harf'in kac tane oldugunu bulabiliyoruz


let harf = prompt("harfi giriniz")

let metin = "Suan enEs bulut ile jaVaScript dErsi yApiyorUm Bu dA DENeme YaziSi"

let sonuc = bul(harf);
alert("harf sayisi :" + sonuc)


function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()) {
            toplam += 1;
        }
    }
    return toplam;
}

// alternatif (istedigin metni kendin secme)

let metin2 = prompt("metin")
let harf2 = prompt("harfi giriniz")


let sonuc2 = bul(harf2);
alert("harf sayisi :" + sonuc2)


function bul(harf) {
    let toplam = 0;
    for (let i = 0; i < metin2.length; i++) {
        if (metin2.charAt(i).toLocaleLowerCase() === harf2.toLocaleLowerCase()) {
            toplam += 1;
        }
    }
    return toplam;
}