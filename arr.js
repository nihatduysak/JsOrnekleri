// diziler - arrays
// veri kümeleri

// dizilerin isimleri mutlaka çoğul verilir
// ingilizce ise sonuna s takısı veya List yazılır

// benzer verileri gruplamak için kullanıyoruz

// let studentList
// let ogrencler
let students = ['Buğra', 'Merve', 'Hasan', 'Irmak'];
console.log(students);

// length = uzunluk belirtir - dizi içinde kaç eleman olduğunu söyler

// dizi içindeki nuaramalandırmaya index denir.
// indexler her zaman 0'dan başlar.

// console.log(students[0]);

// Array.isArray(students); -> bunun çıktısı mutlaka bool yani boolean olur.
// true ya da false olur

// dizi elemanı - array item 
// dizi içindeki her bir veriyi ifade eder

console.clear();
console.log(students.length);
students[3] = 'Osmancan';
console.log(students);

students[7] = 'Damla';
console.log(students);
console.log(students.length);

// diziye yeni bir eleman eklerken
// diziIsmi[index numarası] şeklinde ekleme yapmak kötü bir kullanım biçimidir.
// İstenmeyen sonuçlar doğurur mevcut veriyi ezebiliriz veya 
// boş bir dizi elemanları oluşturabiliriz. İkiside istemeyeceğimiz şeyler

// const ilkEleman = students[0];
// console.log(typeof students[2]);

// let rakamlar = [5, 10, 15, 20, 25];
// console.log(rakamlar[2]);

// rakamlar[1] += 10;
// console.log(rakamlar[1]);

console.clear();

// console.log(students);

students[students.length] = 'Misirkhan'; // okunuşu Misirhan
// console.log(students);

students[students.length] = 'Mehmet'
console.log(students);

// length -1 bize her zaman dizinin son elemanını verir
// const sonOgrenci = students[students.length -1];
const sonOgrenci = students.at(-1);
// at(-1) aynı length -1 gibi çalışır bize son elemanı verir
console.log(sonOgrenci);

// JavaScript Array Methods / Methodları

// dizinin sonuna yeni elemena eklemek için
// dizi methodumuz "push"

students.push('Hilal');
students.push('Koray');

console.log(students);

// dizinin önüne yeni eleman eklemek için
// dizi methodumuz "unshift"

students.unshift('Nisanur');
console.log(students);

// .pop() sonuncu elemanı siler ve bize getirir
students.pop();
console.log(students);

// .shift() ilk elemanı siler ve bize getirir
students.shift();
console.log(students);


// .includes() bir elemanın dizide var mı diye kontrol eder ve 
// bize sonuç true ya da false döner 
console.log(students.includes('Merve'));
console.log(students.includes('Nihat')); // dizi içerisinde nihat yok

console.clear();

console.log(students);

// .indexOf() verilen elemanın index bilgisini bize döner.
// eğer eleman dizi içinde yok ise bize -1 olarak döner.
console.log(students.indexOf('Merve'));
console.log(students.indexOf('Nihat'));

// .join() diziyi birleştirir ve string olarak döner
console.log(students);
console.log(students.join('-'));

// .split() bir string'i array'e çevirir
let meyveler = "Karpuz, Kavun, Elma, Mangı, Ejder Meyvesi";
// let arr = meyveler.split(',');
// console.log(arr);

// .slice(start, end)
// diziden belirli bir kısmı kopyalamamıza ya da başlangıç ve bitiş vererek yeni bir
// dizi oluşturmaya yarar

let rakamlar = [15, 10, 23, 45, 120, 725];
// console.log(rakamlar.slice(1,3));
// parantez içi ilk alacak değer - kaçıncı indexten başlayacağını yazacaksınız
// ikinci değer - kaç eleman gideceğini yazacaksınız

// .splice() - hem ekleme hem çıkarma yapar
// yarın derse kadar araştırmanızı ve örnek yapmanızı istiyorum
// yarın derste baktığınız öğrendiğiniz bilgilere örneklere bakacağız

// console.log(rakamlar);

// .reverse() - Diziyi tersine çevirir
// console.log(rakamlar.reverse());

// .sort() - diziyi alfabetik ya da sayısal sıraya göre sıralar (dikkatli kullanılmalı! :))

console.log(rakamlar.sort());
// bunuda yarına kadar kontrol etmenizi istiyorum. neden böyle sıraladığını sizden öğrenmek istiyorum :)

console.log(students.sort());
console.clear();

// .concat() -> iki veya daha fazla diziyi birleştirir ve yeni bir dizi döner

let teams = ['Beşiktaş', 'Fenerbahçe', 'Galatasaray', 'Trabzonspor'];
let playerList = ['Ronaldo', 'Hagi', 'Alex', 'Rüştü'];

console.log(teams);
console.log(playerList);

// let merge = teams.concat(playerList);
// merge - birleştirmek
// her zaman bir değişkene atmak zorunda değilsiniz
// değişkene atmamızdaki amaç daha sonra tekrar tekrar kullanabilelim diye
// ya da her zaman console içinde uzun uzun yazmanıza gerek yok
// değişkene atayıp yazabilirsiniz

// console.log(merge);
console.log(teams.concat(playerList));

// obj, func, loops anlatıldıktan sonra kullanacağız !!

// map() -> her eleman üzerinde işlem yapar ve yeni dizi döner
// filter() -> şarta uyan elemanlarla yeni bir dizi oluşturur
// find() -> şarta uyan ilk elemanı getirir ya da döner
// reduce() -> Tüm elemanları tek bir değere dingirger (4 işlem vb....)

