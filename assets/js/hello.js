// JS web sayfasına html sayfası üzerinden dahil edilmesi gereken statik kodlar
// ister css gibi dosyayla istersen doğrudan sayfa içine yazılacak çalışabilen kodlar
// script etiketi ile kullanıyoruz

// type="text/javascript" -> diye bir eklentisi vardı artık kullanmıyoruz
// bazı yerlerde görebilirsniz ama kullanmıyoruz

// src -> kullanıyoruz onuda harici bir dosya çağırmak için kullanıyoruz

// yorum satırı

/*
istediğiniz
kadar
yorum
yazabilirsiniz
*/

// programlama dillerinde veriler türlerine göre ayrılır
// primitive - ilkel - değer tipli veriler -> doğrudan içindeki değeri tutan veriler

// bunlar ;
// programcılık tarafında bir karşılığı var

// metin -> string -> js (javascript) string ifade çift tırnak veya tek tırnak arasında belirtilir

// sayı, küsüratlı sayı -> number (integer (tamsayı)), double, float, decimal (küsüratlı sayılar için)
// tırnak vb yoktur doğrudan yazılır

// tarih -> date (datetime) -> js'de bununla uğraşmayın

// binary tipinde 1 ve 0'a benzer -> true ve false -> bool -> boolean -> true ve false

// JS tek veya çift tırnak farketmez ben hallederim diyor. Diğer dillerde sorun çıkartıyor.

// alert('Hello JS Dünyası');

// Tarayıcı uyarı kutusu
// Bu bir fonksiyondur. Tarayıcının içinde olan bir fonksiyon
// Fonksiyonun ismini yazdıktan sonra parantez aç kapa ve gösterilmesi 
// gereken mesajı içine yaz (tırnakları unutma)

// özelliğinin amacı 
// normalde, tarayıcılar bir HTML sayfasını yüklerken script
// etiketine rastlandığında JavaScript dosyasını hemen indirir ve çalıştırır.
// Bu da HTML'in yüklenmesini geçici olarak durdurabilir.
// Bu yüzden defer kullanıldığında bu durum ortadan kalkar.

// Javascript dosyasının senkron yerine asenkron oalrak yüklenmesini sağlar
// Bu özellik, sayfanın yüklenme performansını optimize etmek ve tarayıcıda
// doğru bir sırada çalışmasını sağlamak için kullanılırs.

// sürekli aler'ü çalıştırmak / çağırmak çok sevimsiz bir durum
// yeni nesil güzel tarayıcıların js yazıyorsanız 2 tane güzel tarayıcı mevcut
// chrome ve firefox bunların dışında js ile aktif geliştirme yapıyorsanız
// diğerlerinde keyfiniz kaçabilir. geliştirici araşları yeteri kadar gelişmemiş oluyor

console.log('Merhaba JS dünyası console.log u test ediyoruz');

console.log('Çalışma sırası : ');
console.log('sıra 1');
console.log('sıra 2');
console.log('sıra 3');

console.log("Nihat'ın javascript kodu");
console.log('Eğitimde ve console da "Nihat" hoca farkı');

// hatayı editor bize console'da gösteriyor

// bu yaptığımız işleme karakterleri "escape etme" denir -> türkilizce
// metin hatası alıyorum derseniz size escape etsene denir / derler
// char escaping

console.log('Nihat\'ın console örnekleri');

// backslash
// win -> alt gr + *
// mac -> opt + *

// metinsel ifadeleri + ile birleştirebiliyoruz
console.log('Nihat' + 'Duysak');
console.log('Nihat' + ' ' + 'Duysak');

console.clear();
// konsolu temizler bu satırdan önce yazılan tüm kodları siler

// string interpolation -> sunum -> Mehmet

console.log('123'); 
console.log(123);
console.log(12_345_678_910);

// boşluk eklersek kod hata verir. Fakat kodu rahat okuyabilmek için
// number yani sayılar arasına _ (alt tire) ekleyebiliriz.
// kodun çıktısı normal görünür fakat js tarafında rahatlıkla okuyabiliriz

console.log(12.5)
// console.log(7,5) -> burada amerikan sistemi devreye giriyor
// js küsüratlı sayılara float denir
// tam sayılara integer denir
// ikisinide ayrıstırılmaksızın tip olarak Number olur
// Number = numara


console.log("Projede güncelleme yapıp git'e atıyorum");

// güncelleme yaptıktan sonra ;
// 1- git add .
// 2- git commit -m "commit mesajı buraya yazılacak"
// 3- git push 


// numaralar üzerinde matematik operatörlerini kullanabiliriz
// +, -, *, /, %

console.log(4 + 6);
console.log(5 * 4);

console.log(((4 + 8) * 12) / ((40 * 15) * 25) - 50);

console.clear();


// programlama dillerinde parantezler işlem önceliğini değiştirir

// prompt('Adınız nedir ?');

// console.log(prompt('Adınız nedir ?'));
// console.log('Merhaba ' + prompt('Adınız nedir ?'));

// Veri Dönüştürme

// rakamı metne dönüştürme kısmını pek dert etmeyiz, çok fazla ihtiyacımız olmaz

// prompt veya form elemanları (inputlar) bize her zaman string verir
// string olan veriyi matematik işlemi yapmak için
// numaraya (number) çevirmemiz gerekiyor

// css'te olduğu gibi büyük küçük harf duyarlılığı var
// JS case sensitive bir dildir. 

// Number('29') -> number çevirmiş olur

// JS tip dönüştürmeleri -> Sunum -> Gamzenur
// Number ve parseInt, parseFloat farklılıklarına da değinmeni istiyorum

// console.log(2025 - prompt('Kaç yılında doğdun'));

// JS anormal bir dil olduğu için kendi kendine bazen tipleri değiştiriyor :)

// console.log('Yaşın: ' + (2025 - Number(prompt('Kaç yılında doğdun'))));

// kullanıcı yaşını girsin ve doğum yılını söyleyelim

// console.log('Doğum yılı: ' + (2025 - Number(prompt('Kaç yaşındasın ?'))));

// kullanıcıya şimdiki yılı soralım ve doğum yılınıda soralım
// kullanıcıya yaşını söyleyelim

// console.log('Senin yaşın: ' + (Number(prompt('Güncel yılı giriniz: ')) - Number(prompt('Doğum yılınızı giriniz:'))));

// Örnek

// Kullanıcya adı ve soyadını soralım
// hoşgeldin [ad] [soyad] diyelim

// console.log('Hoşgeldiniz: ' + ' ' + prompt('Adınız: ') + ' ' + prompt('Soyadınız: '));

// üsttekine ek olarak doğum yılını soralım ve (yaşını hesaplatacağız)
// Hoşgeldin [ad] [soyad], şuan [yaş]'ındasın

// console.log('Hoşgeldin:' + ' ' + prompt('Adınız: ') + ' ' + prompt('Soyadınız: ') + (2025 - Number(prompt('Kaç yılında doğdun?'))) + ' ' + 'yaşındasın');

// Kullanıcıdan sınav notunu 1, 2, 3 alalım
// ortalamasını yazdıralım

// console.log('Not ortalaman: ' + (Number(prompt('1. Notunuz:')) + Number(prompt('2. Notunuz')) + Number(prompt('3. Notunuz'))) / 3);

// bir üçgenin iç açıları toplamı 180'dir.
// birinci ve ikinci açıyı girelim üçüncüyü yazdıralım

// console.log('Üçüncü açı : ' + (180 - (Number(prompt('1.Açıyı girin:')) + Number(prompt('2.Açıyı girin:'))) + ' ' + 'derecedir.'));

// NaN hatası -> not a number demek

// Değişkenler - Variables
// Program ya da Kod yazarken içine geçici olarak veri sakladığımız alanlar
// Değişkenlerin genel amacı -> veriyi tekrar tekrar kullanabilmek ve erişebilmek
// Bonus özellik -> kod okunurluğunu arttırması
// Geçici değimiz yer -> ram

// Değişkenlerin mutlaka isimleri olur
// programcılıkta değişken isimlendirme stardartları vardır.
// programcılıkta clean code -> readable code yazmanız çok önemli

// değişken tanımlamanın anahtar kelimesi "let"
// artık "var" kesinlikle kullanmıyoruz. Büyük problem çıkartıyor modern js içinde yer almıyor
// TarTarayıcı çalıştırıyor o da geriye dönük uyumluluktan dolayı

// Değişken tanımlama yöntemi
// değişken anahtar kelimesi + değişken ismi + atama operatörü + değer 

// let ad = 'Nihat';
// JS'de değişkenler camelCase formatında isimlendirilir
// En önemli olaylarından bir tanesi TÜRKÇE KARAKTER KESİNLİKLE KULLANMAMALIYIZ !!!
// Diğer bir önemli konu -> ardışık değişken isimleri %99 oranında hatalı isimlendirme yapıyorsunuz demektir.

// console.log(ad);

// eşittirin sol tarafı ve sağ tarafı çok önemli

// let ad;
// console.log(ad);

// ad = 'Nihat';
// console.log(ad);

// let isim = prompt('Adınız ?');
// // console.log(isim);
// let soyad = prompt('Soyadınız ?');

// // console.log(isim + soyad);

// let tamAd = isim + ' ' + soyad;
// console.log('Hoşgeldin ' + tamAd);

// let data;
// // let data = 'veri';
// console.log(data);

// tanımlama yapılmadıysa veya veri olmadıysa veya veri içinde yoksa

// undefined -> tanımsız
// null -> boş değer
// en güzel örneği tuvalet kağıdı örneği

// değişken ismi verirken ardığık sayıyla değişken ismi vermeyiz
// örnek olsun diye şuan kullanacağım

let name = 'Nihat';
let name2 = name;
let name3 = name2;

// name ismi vs code tarafından daha önceden revize edilmiş bir kelimedir.
// kullanam diye üstünü çiziyor fakat böyle bir şey yok gerekte yok

// alert('tık tık');

console.log(name);
console.log(name2);
console.log(name3);

name = 'Leo';
console.log(name);
console.log(name3);

console.clear();

// hasan için mevcut kodları güncelleme ve github'a gönderme

// console.log('Üçüncü açı: ' + (180 - (Number(prompt('1.açıyı girin')) + Number(prompt('2.açıyı girin')))) + ' ' + 'derecedir');

// String, Number, Boolean
// Value Type -> Değer tipi veri
// Referance Type -> Ters köşeye düşeceğiz

// let this = 'hop';
// let new = 'hey';

// constant -> sabit
// const
// değişken birkere tanımlanır bir daha değişmez

const TCKN = 1123123123;
// değiştirilemeyen değerler için const kullanıyoruz

// içeriğini değişmekten korumak istediğimiz verileri
// burada saklarız. Aynı zamanda sadece okunma odaklı olduğu için
// içerisindeki büyük veriye de daha hızlı erişebiliriz

// çok uzunca bir süre endişe etmemize gerek yok
// Karar veremediğiniz durumlarda direkt olarak let kullanabilirsiniz

// değişkenleri tiplerini kontrol etmek için
// typeof kullanıyoruz

// let ad = 'Nihat';
// let yas = 36;
// let resitMi = true;

// API -> Sunum -> Aleyna
// API'ın çalışma konseptini anlasak gerisi kolay

// NaN -> Not a Number

// yas = yas + 4;

// yas += 4;
// console.log(yas);

// yas++; // birer birer arttırır
// console.log(yas);

// yas--; // birer birer düşürür / azaltır
// console.log(yas);

// ++yas; // ikisi arasındaki farkı araştırın, keşfedin -> araştırma notu


// let mesaj = 'Merhaba';
// mesaj += ', Nasılsınız ?';
// console.log(mesaj);

// // bool tipi değişkenler için isimlendirme önemlidir
// // değişken ismi bool sonucunu ifade edecek şekilde
// // verilmelidir

// let isStudent = true;
// let ogrenciMi = true;

// let resitMi = false;

// karşılaştırma operatörleri bir veya birden fazla durumu karşılaştırıp
// karşılaştırma sonucunda evet veya hayır -> true veya false bilgisi verir
// karşılaştırma operatörü kullandığımızda veri tipimiz mutlaka bool olur.

console.clear();

// Karşılaştırma Operatörleri

// eşitlik == veya === (tip kontrolü)
// eşit değildir != veya !== (tip kontrol)
// büyüktür >
// küçüktür <
// büyük eşittir >=
// küçük eşittir <=
// ternary ? -> bunu daha sonra anlatacağım

// let age = 70;
// let gender = 'Man';
// let legalAge = 18;

// console.log(age >= legalAge);

// let isAdult = age >= legalAge;
// console.log(isAdult);

// eğer bool ifadelerin başına ! (ünlem) gelirse ya da eklersek ya da koyarsak
// durumu tersine çevirir
// bool sadece true veya false olur

// Mantıksal Operatörler

// && -> ve operatörü -> hepsi true olmalı
// || -> veya operatörü -> herhangi biri true olsa yeter 
// | -> pipe alt + < > / option + < >
// Mantıksal operatörleri boolean döner
// mantıksal operatörlerin içinde boolean veya karşılaştırma operatörleri kullanırız

// tip okunurluğunu arttırmak için
// parantez içine alabiliriz

// let askereGidebilirMi = (age >= 18) && (gender === 'Man');

// let topluTasimaUcretsizMi =  (age <= 6) || (age >= 65);
// console.log(topluTasimaUcretsizMi);

// let inputAge = prompt('Yaşınız');
// inputAge = Number(inputAge);
// console.log(inputAge);

// let isUserAdult = inputAge >= 18;
// console.log(isUserAdult);

// let firstName = prompt('Adınız');
// let lastName = prompt('Soyadınız');
// let age = prompt('Yaşınız');

// console.log('Merhaba ' + firstName + ' ' + lastName + ' ' + age + ' ' + 'yaşındasın');

// backtick `` -> win alt gr + , -> mac opt + ,
// ' tek tırnak ile karıştırmayın !!
// backtick yazdıktan sonra string değer alacak ise onu yazarız daha sonra
// değişken kullanacak isek $ ve {} ile kullanırız. Süslü parantez içine değişkenleri yazarız

// console.log(`Merhaba ${firstName} ${lastName} ${age} yaşındasın`);

// let kdv = 1.20;
// let hesaplanacakKdv = prompt('Hesaplamak istediğiniz tutarı yazınız');
// let toplam = hesaplanacakKdv * kdv;

// console.log(`Hesaplanan kdv : ${toplam} TL'dir.`);

// Koşullar 
// if, else if, else

// if -> eğer
// else if -> değilse eğer
// else -> değilse

if(true) {
  // if'in koşulu yani parantez içi true olması durumunda
  // scope yani süslü parantez içindeki kodu çalıştır diyorum
}

// {} -> scope

// let inputName = prompt('Adınız');

// if(inputName === 'Nihat') {
//   console.log(`hoşgeldin ${inputName}`);

//   // süslü parantez yani scope içine kod yazdığımızda
//   // bu kısma scope (kapsama alanı) diyoruz. Koşul
//   // gerçekleştiğinde bu scope içindeki kodlar çalışır.
// } else {

//   // if içindeki koşul sağlanmaz ise buradaki kod çalışır
//   console.log('Seni tanıyamadım kusura bakma');
// }

// if(inputName === 'Orhan') {
//   console.log(`Hoşgeldiniz ${inputName} hocam`);
// } else if (inputName === 'Nihat') {
//   console.log(`Hoşgeldin ${inputName}`)
// } else if (inputName === 'Leo') {
//   console.log(`Hoşgeldin ${inputName} pisi pisi bey`);
// } else {
//   console.log('Hoop geçiş yok sen kimsin ???');
// }

// if(inputName === 'Orhan' || inputName === 'Nihat' ) {
//   console.log(`Hoşgeldiniz ${inputName} hocam`);
// } else if (inputName === 'Mehmet' || inputName === 'Hasan') {
//   console.log(`Hoşgeldiniz ${inputName} bey `)
// } else if (inputName === 'Leo') {
//   console.log(`Hoşgeldin ${inputName} pisi pisi bey`);
// } else {
//   console.log('Hoop geçiş yok sen kimsin ???');
// }

// let inputKullaniciSecim = prompt('Kırmızı başlıklı kız yolda yürüyor kaşısına 2 yol çıktı.\n1)Köprüden mi geçsin ?\n2)Sahilden mi gitsin');

// if (inputKullaniciSecim === '1') {
//   console.log('Köprüden geçerken gıcırtı sesleri geldi köprü çökmek üzere');
// } else if (inputKullaniciSecim === '2') {
//   console.log('Sahilde çok güzel bir hava var. Tam yürümelik');
// }

// let kullaniciSecim = prompt('Taş, Kağıt, Makas');

let bilgisayarSecimi = ['Taş', 'Kağıt', 'Makas'].at(Math.floor(Math.random() * 3));