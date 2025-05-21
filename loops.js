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

for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}

// ALERT !!!
// yarın döngülere devam edeceğiz, localStorage'a bakıcaz (fav kod)
// haftaya function - fonksiyonlara geçeceğiz