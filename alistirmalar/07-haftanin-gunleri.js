// ? Haftanın Günleri Uygulaması

let altSatir = "\r\n";

let gunler = "1-pazartesi" + altSatir
    + "2-sali" + altSatir
    + "3-carsamba" + altSatir
    + "4-persembe" + altSatir
    + "5-cuma" + altSatir
    + "6-cumartesi" + altSatir
    + "7-pazar" + altSatir
    + "lutfen bir gun seciniz yapiniz :"

let deger = prompt(gunler);

switch (deger) {
    case "1":
        alert("pazartesi günü")
        break
    case "2":
        alert("sali")
        break
    case "3":
        alert("carsamba")
        break
    case "4":
        alert("persembe")
        break
    case "5":
        alert("cuma")
        break
    case "6":
        alert("cumartesi")
        break
    case "7":
        alert("pazar")
        break
    default:
        alert("seçtiginiz sayi gecersiz")

}