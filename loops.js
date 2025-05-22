// Döngüler yani Loops
// tekrar eden işlemleri yapmak için kullanılan
// kod parçalarıdır.

// Döngü çeşitleri
// for -> sayılı ve belirli düzende (sırada) çalışan
// for of -> (bazı dillerde foreach) -> eleman sayısı kadar
// while -> koşula bağlı çalışan
// do while -> bunu araştırabilirsiniz çok fazla kullandığımız bir döngü değil
// array methodları içinde .forEach() döngüsü bulunur.

// performansı kötü olan ve kullanmanızı istemediğim
// for in döngüsüde var. Bunu sadece objeler için kullanıyoruz.

// DİKKAT EDİLMESİ GEREKEN ÖNEMLİ KAVRAM
// infinite loop -> sonsuz döngü
// kodun çıkamadığı sonsuza dek çalışan döngülere denir 
// genelde istemediğimiz ve yönetemediğimiz sorunlara sebep olur
// kullanıcının tarayıcısını kilitleyebilir

// düz for döngüsü sayaç değeri ile çalışır
// bu değer çoğunlukla index'i ifade ettiği için
// kısaca i harfi kullanılması standart hale gelmiştir.
// iç içe döngüler açabiliriz, örneğin ikinci for döngüsünde
// harf olarak j kullanılır.

// sayaç tanımı - değişken tanımı; çalışma koşulu; sayaç artışı

for (let i = 1; i <= 10; i++) {
  console.log(i);

  // for (let j = 1; j <= 10; j++) {
  //   console.log(i, j);
  // }
};

console.clear();

// döngünün her bir çalışma işlemine 
// iterasyon - iteration

let meyveler = ['Karpuz', 'Kavun', 'Ejder Meyvesi', 'Mango', 'Yeni Dünya'];

// console.log(meyveler.length);

// console.log(meyveler[0]);


// ALERT !!!
// yarın döngülere devam edeceğiz, localStorage'a bakıcaz (fav kod)
// haftaya function - fonksiyonlara geçeceğiz

// for (let i = 0; i < meyveler.length; i++) {
//   console.log(meyveler[i]);
// }

// for (let meyve of meyveler) {
//   console.log(meyve);
// }

let studentList = ['Koray', 'Hilal', 'Damla', 'Mehmet'];

studentList.push('Merve');

// console.log(studentList);

// for (let i = 0; i < studentList.length; i++) {
//   console.log(studentList[i]);
// }

// console.log('----');

// for (let student of studentList) {
//   console.log(student);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(i, j);
//   }
// };

let adlar = ['Nihat', 'Mehmet', 'Koray', 'Buğra'];
let soyadlar = ['Duysak', 'sönmez', 'Keleş', 'Erdoğan'];
let yaslar = [36, 25, 30, 27];

// console.log(adlar[0], soyadlar[0], yaslar[0]);

// listeleme arama ekleme çıkartma ve düzenleme yapabiliyoruz..
// Bunlar için fonksiyonları öğrendiğimiz hepsi için ayrı ayrı fonksiyon yazacağız
// fonksiyon konusu haftaya


// let sayilar = [];
let toplam = 0;

// for (let i = 0; i < 3; i++) {
//   let toplanacakSayi = Number(prompt(`Toplanacak ${i + 1}. sayıyı giriniz`));
//   // sayilar.push(toplanacakSayi); // diziye örnek olarak ekledim
//   toplam += toplanacakSayi; // aynı anda toplama işlemi yaptım
// }

// for (let sayi of sayilar) {
//   console.log(sayi);
// }

// console.log(`Toplam: ${toplam}`);

// Sunum Konuları

// JS Math Object - Salı - Nisanur
// Arrow Function (fat arrow =>) - Perşembe
// fat arrow yani arrow function, function'ın kısa yazılmış yazılacak hali - Hasan

// İsim litesi (dizi) oluşturalım
// Kullanıcıya kaç adet isim gireceğini soralım
// Listeye ekleyelim
// Daha sonra for ya da for of ile o listeyi ;
// 1. Nihat
// 2. Leo

let ogrenciler = [];
let ogrenciSayisi = Number(prompt('kaç tane öğrenci eklemek istiyorsunuz ?'));

for (let i = 0; i < ogrenciSayisi; i++) {
  let ogrenciAdi = prompt(`${i + 1}. öğrencinin adını giriniz`);
  ogrenciler.push(ogrenciAdi);
  
  // console.log(`${i + 1}. öğrenci : ${ogrenciAdi}`);
}

// scope içinde bir tanımlama yaptıysanız 
// scope dışında o tanımlamaya erişemezsiniz

let sira = 1;

for (let ogrenci of ogrenciler) {
  console.log(`${sira}. öğrenci: ${ogrenci}`);
  sira++;
}