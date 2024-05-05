//break - continue

// ? break
// 1- den 10 a kadar sayıları yazıralım 8 e geldiğimizde döngüden cıkalım


let sayac1 = 1;

while (sayac1 <= 10) {
    console.log(sayac1);
    if (sayac1 == 8) {
        break;
    }
    sayac1++;
}


// ? Continue
//1 2 3 4 5 6 7 9 10

let sayac = 0;

while (sayac <= 10) {
    sayac++;
    if (sayac > 10) {
        break;
    }
    if (sayac == 8) {
        continue;
    }
    console.log(sayac);
}
