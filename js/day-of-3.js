console.log("DAY 3- 30 Days Of JavaScript: Booleans (Boole Değerler), Operators (Operatörler), Date (Tarih Objesi)")
let isLightOn = true // ışık açık doğru
let isHungry = false // aç yanlış
let isMarried = true // evli doğru
let truValue = 4 > 3    // true -- doğru
let falseValue = 4 < 3  // false -- yanlış

/*********Doğru Değerleri (true)
Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
Boş bir dize ('') dışında tüm dizeler doğrudur
Boole değeri doğru

*********Yanlış Değerleri (false)
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

//let firstName
//console.log(firstName) //tanımlanmamış, çünkü henüz bir değer atanmamış.
let empty = null
console.log(empty) // -> null(boş) , değer yok anlamına gelir

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo // toplama
let diff = numOne - numTwo // çıkarma
let mult = numOne * numTwo // çarpma
let div = numOne / numTwo // bölme
let remainder = numOne % numTwo // kalanı bulma (bölmedeki kalan oluyor bu Biraz matematik :D )
let powerOf = numOne ** numTwo // buda üstel sayı anlamına geliyor Örnek: 4 Üssü 3 Kaçtır? Biraz matematik 2 :D 

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64   ---- Sonuçları console.log'a tek tek yazıp deneyin

let radius = 100          // metre cinsinden uzunluk

// Bir dairenin alanını hesaplayalım
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravitya = 9.81      // m/s2 cinsinden ( metre saniye cinsi )
let masss = 72             // kilogram cinsinden

// Bir cismin ağırlığını hesaplayalım
const weight = masss * gravitya
console.log(weight)        // 706.32 N(Newton)

const boilingPointt = 100  // oC cinsinden sıcaklık, suyun kaynama noktası
const bodyTempp = 37       // oC cinsinden vücut ısısı


// Dize enterpolasyonu kullanarak dizeyi sayılarla birleştirme
/*
 The boiling point of water is 100 oC. // Suyun kaynama noktası 100 oC'dir.
 Human body temperature is 37 oC.  // İnsan vücut sıcaklığı 37 oC'dir.
 The gravity of earth is 9.81 m/s2. // Dünyanın yerçekimi 9.81 m/s2'dir.
 */
console.log(
  `The boiling point of water is ${boilingPointt} oC.\nHuman body temperature is ${bodyTempp} oC.\nThe gravity of earth is ${gravitya} m / s2.`
)

let c = 4
let d = '4'

console.log(c == d) //true burada veri tütüne bakmadan sadece aynı değer mi ona bakıyor 
console.log(c === d) //false bura hem ideğer hem veri türüne bakıyor yani string mi, int mi boolen mı vs
console.log(3 > 2)              // true, çünkü 3 2 den büyüktür
console.log(3 >= 2)             // true, çünkü 3 2 den büyüktür
console.log(3 < 2)              // false,  çünkü 3 2 den büyüktür
console.log(2 < 3)              // true, çünkü 2 3 den küçüktür
console.log(2 <= 3)             // true, çünkü 2 3 den küçüktür
console.log(3 == 2)             // false, çünkü 3 2 ye eşit değildir
console.log(3 != 2)             // true, çünkü 3 2 ye eşit değildir
console.log(3 == '3')           // true, sadece değeri karşılaştırıyor
console.log(3 === '3')          // false, hem değeri hemde veri türünü karşılaştırıyor o yüzden yanlış. Birisi int değeri birisi string değerinden ( Bu denklik operatörü )
console.log(3 !== '3')          // true, hem değeri hemde veri türünü karşılaştırıyor o yüzden doğru. (Bu denk değil operatörü)
console.log(3 != 3)             // false, değeri karşılaştırıyor
console.log(3 !== 3)            // false, hem değeri hem de veri türünü karşılaştırıyor
console.log(0 == false)         // true, eşdeğer
console.log(0 === false)        // false, tam olarak aynı değil
console.log(0 == '')            // true, eşdeğer
console.log(0 == ' ')           // true, eşdeğer
console.log(0 === '')           // false, tam olarak aynı değil
console.log(1 == true)          // true, eşdeğer
console.log(1 === true)         // false, tam olarak aynı değil
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, eşit değil
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

//MANTIKSAL OPERATÖRLER

// &&   ve işareti operatörü örneği
const checkOne = 4 > 3 && 10 > 5 //true && true -> true
// || boru veya operatör, örnek
const checkTwo = 4 > 3 || 10 < 5 // true  || false -> true
//! olumsuzlama örnekleri
let checkThree = 4 > 3 // true
let checkFour = !(4 > 3)//  false
let isLightOnn = true //true
let isLightOff = !isLightOn// false
let isMarriedd = !false // true


//KOŞUL OPERATÖRLERİ

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')
//
  let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  
//alert('Welcome to 30DaysOfJavaScript')  //UYARI MESAJI

//Window prompt() metot
/*Pencere yöntemleri, tarayıcınızda giriş değerlerini almak için bir giriş içeren bir bilgi istemi kutusu görüntüler
 ve giriş verileri bir değişkende saklanabilir. prompt() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır.*/
//prompt('required text', 'optional text')
//let numberss = prompt('Enter number', 'number goes here')
//console.log(numberss)

//Window confirm() metot
/*confirm() yöntemi, bir Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler.
 Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. Pencere confirm() 
 argüman olarak bir dize alır. Tamam'a tıklamak doğru değeri verir, İptal düğmesine tıklamak yanlış değeri verir.*/
//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box

//DATE OBJESİ
/*Zaman önemli bir şeydir. Belirli bir faaliyetin veya olayın zamanını bilmek isteriz. JavaScript'te geçerli saat 
ve tarih, JavaScript Date Objesi kullanılarak oluşturulur. Date objesini kullanarak oluşturduğumuz nesne, tarih ve 
saat ile çalışmak için birçok yöntem sunar.*/
const now = new Date()
console.log(now) // Sat Aug 24 2024 00:39:30 GMT+0300 (GMT+03:00)

//Bir zaman objesinden tam yılı çıkaralım veya alalım.
const nowA = new Date()
console.log(nowA.getFullYear()) // 2020

//Bir zaman objesinden ayı çıkaralım veya alalım.
const nowB = new Date()
console.log(nowB.getMonth()) /* Bunu yazdığınızda muhtemelen bulunduğunuz aydan bir önceki ayın sayısını alıcaktır 
çünkü aylar 0 - 11 arasında oluşuyor.Ocak 1 değil 0. ay oluyor aralıkta 11. ay oluyor.*/

//Bir zaman objesinden ayın tarihini çıkaralım veya alalım.
const nowC = new Date()
console.log(nowC.getDate()) // yukardaki örnekte bulunan açıklamaya ek olarak geçen ayın gün sayısını verecektir.

//Bir zaman objesinden haftanın gününü çıkaralım veya alalım.
const nowD = new Date()
console.log(nowD.getDay()) 

//Bir zaman objesinden saatleri çıkaralım veya alalım.
const nowE = new Date()
console.log(nowE.getHours())  

//Bir zaman objesinden dakikaları çıkaralım veya alalım.
const nowF = new Date()
console.log(nowF.getMinutes())  

//Bir zaman objesinden saniyeleri çıkaralım veya alalım.
const nowG = new Date()
console.log(nowG.getSeconds()) 

//Zamanı Almak
//Bu metot 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir.
//Unix zamanını iki şekilde alabiliriz;
//1 getTime() Kullanımı
const nowH = new Date() //
console.log(nowH.getTime()) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.
//2 Date.now() Kullanımı
const allSeconds = Date.now() 
console.log(allSeconds) // çıktı farklı olacaktır , 1 Ocak 1970 den kullandığınız zaman arasındaki süreyi milisaniye cinsinden verecektir.

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const nowI = new Date()
const year = now.getFullYear() // yılı döndürür
const month = now.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now.getDate() // günü döndürür (1 - 31)
const hours = now.getHours() // sayıyı döndürür (0 - 23)
const minutes = now.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 