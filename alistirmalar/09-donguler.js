// !  Donguler

// ?  for dongusu

// 1 den 10 a kadar yazdirmak

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 1 den 10 a kadar cift yazdiralim

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i)
}

// 1 den 10 a kadar tekli yazdiralim

for (let i = 1; i <= 10; i = i + 2) {
    console.log(i)
}

// isim soyisim tekrar ederek yazdiralim

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("Halid");
    } else {
        console.log("duman");
    }
}

toplam = 0
for (let i = 50; i >= 1; i--) {
    toplam = toplam + i
    console.log(i);
}

console.log("toplam: ", toplam);

// ? While dongusu

// 1 den 10 a kadar ciftleri ve tekleri yazdıralım

let sayi = 1

while (sayi < 10) {
    console.log(sayi);

    sayi++
}



let sayac1 = 0;

while (sayac1 <= 10) {
    if (sayac1 % 2 == 1) {
        console.log(sayac1);
    }
    sayac1++;
}



let sayac = 1;
while (true) {
    console.log(sayac);
    if (sayac == 7) {
        break;
    }
    sayac++;
}
