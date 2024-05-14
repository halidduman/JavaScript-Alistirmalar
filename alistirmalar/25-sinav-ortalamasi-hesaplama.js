let vize1 = Number(prompt("Vize 1 notunu giriniz:"));
let vize2 = Number(prompt("vize 1 notunuzu giriniz"));
let final = Number(prompt("vize 2 notunuzu giriniz"));
let ortalama = (vize1 * 0.3)+(vize2 * 0.3)+(final * 0.6);

if (ortalama >= 60) {
  alert("geçtiniz");
} else {
  alert("kaldınız");
}
