// sinav ortalamasi 

let vize1 = Number(prompt("vize 1 notunuz:"))
let vize2 = Number(prompt("vize 2 notunuz:"))
let final = Number(prompt("final notunuz:"))

let sonuc = vize1*0.3 + vize2*0.3 + final*0.4

if (sonuc>45){
    alert("Tebrikler Sınavınız Başarılı. Ortalama Notunuz:" + sonuc)
}else{
    alert("Malesef Puan ortalamanız yetersiz Ortalama Notunuz:" + sonuc)
}