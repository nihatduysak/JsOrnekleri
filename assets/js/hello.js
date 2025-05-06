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

console.clear();

console.log("Projede güncelleme yapıp git'e atıyorum");

// güncelleme yaptıktan sonra ;
// 1- git add .
// 2- git commit -m "commit mesajı buraya yazılacak"
// 3- git push 