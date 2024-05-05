// vucut kitle indeksi hesaplama

let boy = Number(prompt("boyunuzu metre cinsinden giriniz"))
let kilo = Number(prompt("kilo bilginizi giriniz"))

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    alert("kilonuz İdeal kilonun altında" + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    alert("kilonuz İdeal kiloda" + sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
    alert("kilonuz İdeal kilonun üstünde" + sonuc);
} else if (sonuc>=30 && sonuc<= 39.9 ){
alert("kilonuz İdeal kilonun çok üstünde (obez)" + sonuc);
} else if (sonuc>= 40) {
    alert("kilonuz İdeal kilonun çok üstünde (morbid obez)" + sonuc);
}