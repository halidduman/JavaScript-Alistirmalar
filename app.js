//?ehliyet ornegi------------------------------------------

// let yas = prompt("yaşınız:")
// let para = prompt("paranız:")

// if (yas>= 18 && para>= 5000){
//     alert("işlem onaylandı");
// }else if (yas<18 && para>= 5000 ){
//     alert("paranız yetiyor ama yaşınız kurtarmıyor")
// }else if (yas>18 && para<= 5000 ){
//     alert("yaşınız yetiyor ama paranız yetmiyor")
// }else {
//     alert("bilgileriniz hatalı veya eksik")
// }

// ? sınav ortalamasi hesaplama------------------------------
// let vize1 = Number(prompt("vize 1 notunuz:"))
// let vize2 = Number(prompt("vize 2 notunuz:"))
// let final = Number(prompt("final notunuz:"))

// let sonuc = vize1*0.3 + vize2*0.3 + final*0.4

// if (sonuc>60){
//     alert("Tebrikler Sınavınız Başarılı. Ortalama Notunuz:" + sonuc)
// }else{
//     alert("Malesef Puan ortalamanız yetersiz Ortalama Notunuz:" + sonuc)
// }

// ? yol haritasi-----------------------------------------------

// let secilenYol = prompt("Lütfen Bir Yol Seciniz")

// if (secilenYol == 1) {
//     alert("Sectiginiz yol " + secilenYol + ". yoldur")
// }else if (secilenYol == 2) {
//     alert("Sectiginiz yol " + secilenYol + ". yoldur")
// }
// else if (secilenYol == 3) {
//     alert("Sectiginiz yol " + secilenYol + ". yoldur")
// }else {
//     alert("Sectiginiz yol 3 den büyük veya hiç yol girmediniz.")
// }

// ? boy kilo indeksi------------------------------------------------

// let boy = Number(prompt("boyunuzu metre cinsinden giriniz"))
// let kilo = Number(prompt("kilo bilginizi giriniz"))

// let sonuc = kilo / (boy * 2);

// if (sonuc < 18.5) {
//     alert("kilonuz İdeal kilonun altında" + sonuc);
// } else if (sonuc >= 18.5 && sonuc <= 24.9) {
//     alert("kilonuz İdeal kiloda" + sonuc);
// } else if (sonuc >= 25 && sonuc <= 29.9) {
//     alert("kilonuz İdeal kilonun üstünde" + sonuc);
// } else if (sonuc>=30 && sonuc<= 39.9 ){
// alert("kilonuz İdeal kilonun çok üstünde (obez)" + sonuc);
// } else if (sonuc>= 40) {
//     alert("kilonuz İdeal kilonun çok üstünde (morbid obez)" + sonuc);
// }

// ? yakit alma islemi-------------------------------------------------------

// let dizel = 24.53, benzin = 22.25, lpg = 11.1;

// const yeniSatir = "\r\n";

// const yakitMetni = "1-Dizel" + yeniSatir
//     + "2-Benzin" + yeniSatir
//     + "3-LPG" + yeniSatir
//     + "Yakıt Türünü Seciniz";

// let yakitTipi = prompt(yakitMetni);


// if( yakitTipi == "1" || yakitTipi== "2" ||yakitTipi=="3"){

//     let yakitLitresi = Number(prompt("Yakit Litresini Giriniz"));
// let bakiye = Number(prompt("Bakiyenizi Giriniz"));

//     if (yakitTipi == 1) {
//TODO: DİZEL
//     let odenecekTutar = dizel*yakitLitresi;
//     if (odenecekTutar<bakiye){
//TODO: bakiyeniz yeterli
//         bakiye = bakiye-odenecekTutar;
//         alert("yakıt alma islemi basarili")+yeniSatir
//         +"Kalan Bakiye :" + bakiye
//     }else {
// TODO :bakiye yeteli degil
//         alert("bakiyeniz yeteli degil !"+yeniSatir
//         +"odenecek tutar:  "+ odenecekTutar + yeniSatir
//         +"bakiye:  " + bakiye+yeniSatir
//         +"eksik tutar :  " +(odenecekTutar-bakiye)
//         )
//     }
//     } else if (yakitTipi == 2) {
//TODO: BENZİN
//         let odenecekTutar = benzin*yakitLitresi;
//         if (odenecekTutar<bakiye){
//TODO: bakiyeniz yeterli
//             bakiye = bakiye-odenecekTutar;
//             alert("yakıt alma islemi basarili")+yeniSatir
//             +"Kalan Bakiye :" + bakiye
//         }else {
//TODO: bakiye yeteli degil
//             alert("bakiyeniz yeteli degil !"+yeniSatir
//             +"odenecek tutar:  "+ odenecekTutar + yeniSatir
//             +"bakiye:  " + bakiye+yeniSatir
//             +"eksik tutar :  " +(odenecekTutar-bakiye)
//             )
//         }
//     } else if (yakitTipi == 3) {
//TODO: LPG
//         let odenecekTutar = lpg*yakitLitresi;
//         if (odenecekTutar<bakiye){
//TODO: bakiyeniz yeterli
//             bakiye = bakiye-odenecekTutar;
//             alert("yakıt alma islemi basarili")+yeniSatir
//             +"Kalan Bakiye :" + bakiye
//         }else {
//TODO: bakiye yeteli degil
//             alert("bakiyeniz yeteli degil !"+yeniSatir
//             +"odenecek tutar:  "+ odenecekTutar + yeniSatir
//             +"bakiye:  " + bakiye+yeniSatir
//             +"eksik tutar :  " +(odenecekTutar-bakiye)
//             )
//         }
//     }
// } else {
//     alert("geçerli bir Sayi giriniz")
// }

//? 1' den 5' e kadar sayi secme (Switch - Case) alistirmasi.--------------------------------------------------------------------

// let sayi = prompt("lutfen 1 ile 5 arasinda bir sayi giriniz")

// switch (sayi) {
//     case "1":
//         alert("girdiginiz sayi 1 dir")
//         break;

//     case "2":
//         alert("girdiginiz sayi 2 dir")
//         break;

//     case "3":
//         alert("girdiginiz sayi 3 dür")
//         break;

//     case "4":
//         alert("girdiginiz sayi 4 dür")
//         break;

//     case "5":
//         alert("girdiginiz sayi 5 dir")
//         break;
//     default:
//         alert("girdiginiz sayi 5 den büyük")
//         break;


// }


// ? ATM Uygulaması--------------------------------------------------------------------------------------------------------------

// let altSatir = "\r\n";

// let gunler = "1-pazartesi" + altSatir
//     + "2-sali" + altSatir
//     + "3-carsamba" + altSatir
//     + "4-persembe" + altSatir
//     + "5-cuma" + altSatir
//     + "6-cumartesi" + altSatir
//     + "7-pazar" + altSatir
//     + "lutfen bir gun seciniz yapiniz :"

// let deger = prompt(gunler);

// switch (deger) {
//     case "1":
//         alert("pazartesi günü")
//         break
//     case "2":
//         alert("sali")
//         break
//     case "3":
//         alert("carsamba")
//         break
//     case "4":
//         alert("persembe")
//         break
//     case "5":
//         alert("cuma")
//         break
//     case "6":
//         alert("cumartesi")
//         break
//     case "7":
//         alert("pazar")
//         break
//     default:
//         alert("seçtiginiz sayi gecersiz")

// }


// ? ATM UYGULAMASI----------------------------------------------------------------------------------------------------------

// let yeniSatir = "\r\n";
// let bakiye = 1000;


// let metin = "1-Bakiye Görüntüleme " + yeniSatir
//     + "2-Para Çekme" + yeniSatir
//     + "3-Para Yatırma" + yeniSatir
//     + "4-Çıkış" + yeniSatir
//     + "Lütfen bir değer seçiniz.";

//TODO: alert(metin);

// let secim = prompt(metin);
// switch (secim) {
//     case "1":
//         alert("Bakiyeniz : " + bakiye);
//         break;

//     case "2":
//         let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
//         if (cekilecekTutar < bakiye) {
//TODO:başarılıdır
//             bakiye = bakiye - cekilecekTutar;
//             alert("Kalan bakiye : " + bakiye);
//         } else {
//             alert("Bakiyenizden fazla para çekemezsiniz!" + yeniSatir
//                 + "Bakiyeniz : " + bakiye + " " + "Cekilecek Tutar : " + cekilecekTutar);
//         }
//         break;

//     case "3":
//         let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz :"));
//         bakiye = bakiye + yatirilacakTutar;
//         alert("Güncel bakiyeniz : " + bakiye);
//         break;

//     case "4":
//         alert("Sistemden çıkış yapılmıştır...");
//         break;

//     default:
//         alert("Lütfen 1 - 4 arasında değer giriniz !");
//         break;

// }


// ! DöNGÜLER -------------------------------------------------------------------------------------

// ? 1 den 10 a kadar yazdirmak

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// ? 1 den 10 a kadar cift yazdiralim

// for (let i = 0; i <= 10; i = i + 2) {
//     console.log(i)
// }

// ? 1 den 10 a kadar tekli yazdiralim

// for (let i = 1; i <= 10; i = i + 2) {
//     console.log(i)
// }

// ? isim soyisim tekrar ederek yazdiralim

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         console.log("Halid");
//     } else {
//         console.log("duman");
//     }
// }

// toplam = 0
// for ( let i = 50 ; i>=1 ; i--){
// toplam = toplam+i
// console.log(i);
// }

// console.log("toplam: ", toplam);

// let sayi = 1

// while (1<10){
//     console.log(sayi);


// }

//! break - continue------------------------------------------------------------------------------

// ? break
// 1- den 10 a kadar sayıları yazıralım 8 e geldiğimizde döngüden cıkalım


// let sayac1 = 1;

// while (sayac1 <= 10) {
//     console.log(sayac1);
//     if (sayac1 == 8) {
//         break;
//     }
//     sayac1++;
// }


// ? Continue
//1 2 3 4 5 6 7 9 10

// let sayac = 0;

// while (sayac <= 10) {
//     sayac++;
//     if (sayac > 10) {
//         break;
//     }
//     if (sayac == 8) {
//         continue;
//     }
//     console.log(sayac);
// }

// ! carpim tablosu-------------------------------------------------------------------------------------------------
//? Çarpım tablosu yapımı

// for(let i = 1; i<=10; i++){
//         for(let j=1;j<=10; j++){
//             console.log(i+"x"+j+"="+ (i*j));
//         }
//         console.log("-------------------------------------------------");
//     }

// let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
// let sonuc =true;
// for(let i=2 ; i<= Math.floor(sayi/2) ; i++){
//     if(sayi%i==0){
//         //Asal degildir
//         sonuc=false;
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi +" asaldır.");
// }else{
//     alert(sayi +" asal değildir!");
// }

// ! function-------------------------------------------------------------------------------------------------


// fonksiyon
// function kontrolEt(yas) {
//         if (yas < 18) {
//                 alert("ehliyet alamazsınız")
//         } else {
//                 alert("ehliyet alabilirsiniz")
//         }
// }

// fonksiyonu cagirma
// kontrolEt(23)

// ? harf sayi uygulamasi
// let harf = prompt("harfi giriniz")

// let metin = "Suan enEs bulut ile jaVaScript dErsi yApiyorUm Bu dA DENeme YaziSi"

// let sonuc = bul(harf);
// alert("harf sayisi :" + sonuc)


// function bul(harf) {
//         let toplam =0;
//         for (let i = 0; i < metin.length; i++) {
//                 if (metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()) {
//                         toplam += 1;
//                 }
//         }
//         return toplam;
// }



// ? burda metinde secilen harf'in kac tane oldugunu bulabiliyoruz


// let metin = prompt("metin")
// let harf = prompt("harfi giriniz")


// let sonuc = bul(harf);
// alert("harf sayisi :" + sonuc)


// function bul(harf) {
//     let toplam = 0;
//     for (let i = 0; i < metin.length; i++) {
//         if (metin.charAt(i).toLocaleLowerCase() === harf.toLocaleLowerCase()) {
//             toplam += 1;
//         }
//     }
//     return toplam;
// }


// ? alternatif 

// kendi yazdiginiz promt ile bulma



// let metin2 = prompt("Bir Metin Giriniz")
// let harf2 = prompt("Öğrenmek istediğiniz Harf ?")


// let sonuc2 = bul(harf2);
// alert("Harf sayisi sonucu : " + sonuc2  )


// function bul(harf) {
//     let toplam = 0;
//     for (let i = 0; i < metin2.length; i++) {
//         if (metin2.charAt(i).toLocaleLowerCase() === harf2.toLocaleLowerCase()) {
//             toplam += 1;
//         }
//     }
//     return toplam;
// }

// ? Mükemmel Sayı Uygulaması

// isPerfectNumber(prompt("sayi giriniz"))

// function isPerfectNumber(Number) {
//         let toplam = 0
//         for (let i = 2; i <= Number / 2; i++) {
//                 if (Number % i == 0) {
//                         toplam += i;

//                 }
//         }
//         toplam+=1+Number;

//         if(toplam==Number*2){
//                 alert("mükemmel sayi")
//         }else if(!(toplam==Number*2)){
//                 alert("mükemmle sayi degil...")
//         }
// }

// ? alternatif

// isPerfectNumber(6);

// function isPerfectNumber(number){
//     let toplam = 0;
//     for(let i =2 ; i<=number/2 ; i++){
//         if(number%i==0){
//             toplam+=i;
//         }
//     }
//     toplam+=1+number;

//     if(toplam==number*2){
//         console.log("Mükemmel Sayıdır...");
//     }else{
//         console.log("Mükemmel Sayı Değildir..");
//     }
// }


// ? Decimal To Binary Conversion (--10 luk sayi sistemini 2 lik sisteme cevirme--)

// convertDecimalToBinary(6);

// function convertDecimalToBinary(number) {
//     let binary = "";
//     while (true) {
//         binary += (number % 2).toString();
//         number = Math.floor(number / 2);
//         if (number == 1) {
//             //Artık bölmek yok döngüden cıkacagız.
//             binary += 1;
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log("Sonuç : " + result);
// }


// function reverse(binary) {
//     let reverseBinary = "";
//     for (let i = binary.length - 1; i >= 0; i--) {
//         reverseBinary += binary.charAt(i);
//     }

//     return reverseBinary;
// }

// ?-------------------------------------------------kitap

// let kitap1 = { isim: "her şeyi düşünme", yazar: "anne bogel", fiyat: 25,raf:"2.3" }
// let kitap2 = { isim: "hiçbir karşılaşma tesadüf değildir", yazar: "hakan mengüç", fiyat: 25,raf:"1.4" }
// let kitap3 = { isim: "insan neyle yaşar", yazar: "tolstoy", fiyat: 45,raf:"3.5" }
// let kitap4 = { isim: "zafer sızlanarak kazanılmaz", yazar: "haluk tatar", fiyat: 55,raf:"4.1" }
// let kitap5 = { isim: "şeker portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 100,raf:"5.2" }

// let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5,];

// let raf11 = { kod: "1.1. RAF", goster: false }
// let raf12 = { kod: "1.2. RAF", goster: false }
// let raf13 = { kod: "1.3. RAF", goster: false }
// let raf14 = { kod: "1.4. RAF", goster: false }
// let raf15 = { kod: "1.5. RAF", goster: false }

// let raf21 = { kod: "2.1. RAF", goster: false }
// let raf22 = { kod: "2.2. RAF", goster: false }
// let raf23 = { kod: "2.3. RAF", goster: false }
// let raf24 = { kod: "2.4. RAF", goster: false }
// let raf25 = { kod: "2.5. RAF", goster: false }

// let raf31 = { kod: "3.1. RAF", goster: false }
// let raf32 = { kod: "3.2. RAF", goster: false }
// let raf33 = { kod: "3.3. RAF", goster: false }
// let raf34 = { kod: "3.4. RAF", goster: false }
// let raf35 = { kod: "3.5. RAF", goster: false }

// let raf41 = { kod: "4.1. RAF", goster: false }
// let raf42 = { kod: "4.2. RAF", goster: false }
// let raf43 = { kod: "4.3. RAF", goster: false }
// let raf44 = { kod: "4.4. RAF", goster: false }
// let raf45 = { kod: "4.5. RAF", goster: false }

// let raf51 = { kod: "5.1. RAF", goster: false }
// let raf52 = { kod: "5.2. RAF", goster: false }
// let raf53 = { kod: "5.3. RAF", goster: false }
// let raf54 = { kod: "5.4. RAF", goster: false }
// let raf55 = { kod: "5.5. RAF", goster: false }

// let raflar = [
//     [raf51, raf52, raf53, raf54, raf55,],
//     [raf41, raf42, raf43, raf44, raf45,],
//     [raf31, raf32, raf33, raf34, raf35,],
//     [raf21, raf22, raf23, raf24, raf25,],
//     [raf11, raf12, raf13, raf14, raf15,]];

// function rafOlustur() {
//     console.clear()
//     let satir = ""
//     for (let i = 0; i < raflar.length; i++) {
//         for (let j = 0; j < 5; j++) {
//             satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---")+"|";

//         }
//         console.log(satir);
//         console.log("-------------------------");
//         satir = "";
//     }
// }

// rafOlustur()

//?----------------------------------------------------------sayi-tahmin-etme
let mSayi = parseInt(Math.random()*100)
let hak = 1
function tahminEt () {
    let oSayi = Number(prompt("Tahmini Sayiyi Gir"))

if (mSayi == oSayi) {
    console.log ("kazandınız")
}else {
    if (hak ==3) {
        console.log("kaybettiniz")
    } else {
        if (oSayi >  mSayi) {
            console.log("kucuk gir")
        } else {
            console.log("buyuk gir");
        }
        hak = hak + 1
        tahminEt()
    }
}
}