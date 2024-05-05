// ehliyet giris formu

let yas = prompt("yaşınız:")
let para = prompt("paranız:")

if (yas >= 18 && para >= 5000) {
    alert("işlem onaylandı");
} else if (yas < 18 && para >= 5000) {
    alert("paranız yetiyor ama yaşınız kurtarmıyor")
} else if (yas > 18 && para <= 5000) {
    alert("yaşınız yetiyor ama paranız yetmiyor")
} else {
    alert("bilgileriniz hatalı veya eksik")
}