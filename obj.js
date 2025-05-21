// Object - OBJ

// key-value olarak çalışır
// anahtar-değer şeklinde property-özellik alır


let me = {
  ad: 'Nihat',
  soyad: 'Duysak',
  yas: 36,
  ogrenciMi: false,
  hobiler: [
    'bol ödev vermek', 
    'ödevleri kontrol ederken eğlenmek', 
    'zoom ya da meet linki beklemek',
    'Leo tarafından ısırılmak'
  ],
};

console.log(me);

// objenin içindeki değerlere ulaşmak için iki yöntemimiz var
// objeAdi.property
// objeAdi['property']

console.log(me.ad);
console.log(me['soyad']);


// tanımlı veriyi değiştirme işlemi yani mutation denir (yeni atama)
me.ad = 'Leo';

console.log(me.ad);

// propertyler her tip olabilir
// string, number, bool, dizi, obj, function (func)

console.clear();

let ogrenciler = [
  {
    ad: 'Aleyna',
    soyad: 'Akdaş',
    ogrenciMi: true
  },
  {
    ad: 'Hasan',
    soyad: 'Dertli',
    ogrenciMi: true
  },
  {
    ad: 'Nihat',
    soyad: 'Duysak',
    ogrenciMi: false
  },
];

// Sunum Gönüllüsü - Console komutları - Pınar

console.table(ogrenciler);
console.log(ogrenciler);

ogrenciler[1].soyad = 'Dertsiz';
console.table(ogrenciler);

ogrenciler[1].yakisikliMi = true;
console.table(ogrenciler);

ogrenciler.push(
  {
    ad: 'Gamze',
    ogrenciMi: true
  }
);

console.table(ogrenciler);

console.clear();

let students = [
  {
    firstName: 'Nihat',
    lastName: 'Duysak',
    age: 36,
    gender: 'Erkek' // daha sonra enum mantığı ile yapacağız
  }
];

console.table(students);

// CRUD
// Create - push
// Read - Buluyoruz ve ekrana yazdırıyoruz
// Update - Bulduktan sonra = ile yeni atama yapıyoruz
// Delete - dizi ise splice (ile delete işlemi)

let inputFirstName = 'Leo';
let inputLastName = 'Duysak';
let inputAge = 7;
let inputGender = 'Tekir - KÖH';

students.push(
  {
    firstName: inputFirstName,
    lastName: inputLastName,
    age: inputAge,
    gender: inputGender,
  }
);

console.table(students);

let cinsiyet = {
  kadin: 0,
  erkek: 1,
  atakHelikopteri: 2,
}

// if(kullanici.cinsiyet === 0) {
//   // buradaki if'i anlamaya çalışalım
// }

// if(kullanici.cinsiyet === cinsiyet.erkek) {
//   // buradaki if'i anlamaya çalışalım
// }
