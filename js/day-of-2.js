console.log("Javascript ikinci güne hoş geldiniz.")
//Veri Türlri
//İLKEL VERİ TÜRLERİ (değiştirilemez)
/*Numbers - Tamsayılar - Ondalık sayılar
Strings - Tek tırnak, çift tırnak veya ters tırnak içerisindeki tüm veriler..
Booleans - true yada false (true = 1 false = 0 bu iki terimi bu şekilde öğrenin. Çevirilerine çok girmeyin kısaca var yada yok )
Null - Boş değer yada değeri yok
Undefined - Bir değer verilmeyen değişken. ( Örn: let variables; )
Symbol - Sembol yapıcısı tarafından oluşturulabilen benzersiz bir değer */

//İLKEL OLMAYAN VERİ TÜRLERİ (değiştirilebilir.)

/*Objects ( Nesneler )
Arrays ( Diziler )  köşeli parantez kullanılır.[] */
let numOne = 2
let numTwo = 2
console.log(numOne == numTwo)
let js = 'JavaScript'
let py = 'Python'
console.log(js == py)
let lightOn = true
let lightOff = false
console.log(lightOff == lightOn)

let numm = [1, 2, 3, 4, 5] //ilk indeks 0
console.log(numm[0])
numm[0] = 8
console.log(numm)
//Diziler aynı değişkene sdahip olsalar bile eşit değilleredir;
let numbersOne = [1, 2, 3, 4]
let numbersTwo = [1, 2, 3, 4]

console.log(numbersOne == numbersTwo) //FALSE DÖNÜYOR

let userOne = {
name:'Atlantis',
role:'baby',
country:'myth'
}

let userTwo = {
name:'Atlantis',
role:'baby',
country:'myth'
}
console.log(userOne == userTwo) // false
//*************Temel kural, ilkel olmayan veri türlerini karşılaştıramıyoruz. ********* */
//Dizileri, fonksiyonları ve nesneleri KARŞILAŞTIRMAYIN.

let numbers = [1, 2, 3]
let numberList = numbers

console.log( numberList  == numbers) //TRUE çünkü referans almış numberList dizisi numbers'ı

let agee = 35
const gravity = 9.81  // yer çekimi kuvvet değeri bu değer haliyle değişmeyeceği için const olarak tanımlanıyor. 
                      // Değişmez değişkenleri const ile tanımlarsınız.Bunu unutmayın.
let mass = 72         // kilogram cinsinden kütl
const boilingPoint = 100 // derece cinsinden sıcaklık, suyun sabit olan kaynama noktası ( derecesi )
const bodyTemp = 37      // derece. İnsan vücudun sabit olan ortalama sıcaklığı
console.log(agee, gravity, mass, PI, boilingPoint, bodyTemp)


//JavaScript'te Math Objesi, sayılar ile çalışmanız için birçok yöntem sağlar.
//const PI = Math.PI // Buraya kısa bir açıklama getirelim. 
                    //Math objesi sayesinde PI sayısının değerini otomatik alıyoruz.

console.log(PI)// 3.141592653589793

// En yakın sayıya yuvarlama
// Eğer .5'in altındaysa aşağıya üstündeyse yukarıya yuvarlar. Örn: 3.14 ise 3 yapar 3.51 ise 4 yapar.

console.log(Math.round(PI))                // 3.14 olduğu için 3 e yuvarlama yapıyor

console.log(Math.round(9.81))              // Ondası 0.5 üstünde olduğu için 10 yapar

console.log(Math.floor(PI))                // floor aşağı yuvarlar Bu 3 olur

console.log(Math.ceil(PI))                 // ceil yukarı yuvarlar Bu 4 olur

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük sayıyı bulmaya yaradığı için sonuç -5 döner

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük sayıyı bulmaya yaradığı için sonuç 20 döner

//*******//

const randNum = Math.random() // 0 ile 0.999999 arasında rastgele bir sayı üretir.
console.log(randNum)

// 0 ile 10 arasında rastgele bir sayı oluşturalım.
//ÖNEMLİ
const num = Math.floor(Math.random () * 11) // 0 ile 10 arasında rastgele sayı oluşturur
console.log(num)


//Mutlak değer
console.log(Math.abs(-10))      // 10

//Kare kök
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Üs
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logaritma
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Sırasıyla 2 ve 10'un doğal logaritmasını döndürür
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometri
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let randomNum = Math.random()         // 0 ile 0.999 arasında oluşturur
let numBtnZeroAndTen = randomNum * 11 

console.log(numBtnZeroAndTen)         // Sonuç : minimum  0 ve maksimum 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen) // yuvarlama yapıyor
console.log(randomNumRoundToFloor)  

let space = ' '           // boş alan string tek tırnaklı
let firstName = 'Atlantis' // tek tırnaklı string
let lastName = 'Genç' // tek tırnaklı string
let age = 0
let job = 'baby' // tek tırnaklı string

console.log(firstName.length) // karakter sayısını gösteriyor
let fullName = firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + ' years old. I am a ' + job;
console.log(fullName)  
console.log(personInfoOne)  


//String'in bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters eğik çizgi(\) kullanabiliriz.
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
I hope you are enjoying too."
/*\n: yeni satır
\t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
\\: Ters eğik çizgi
\': Tek Tırnak (')
\": Çift Tırnak (") */

console.log(`The sum of 2 and 3 is 5`)  // statik bir veri
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) //dinamik bir veri
console.log(`${a} is greater than ${b}: ${a > b}`)  //interpolasyon metodu bunun yanlış olduğunu söylecek

let personInfoTwo = `I am ${fullName}. I am ${age} years old. I am a ${job}.`
console.log(personInfoTwo)

console.log(`${a} is greater than ${b}: ${a > b}`) 
let string = ' JavaScript '
console.log(string.toUpperCase())
//toUpperCase(): bu metot string verisini büyük harflere dönüştürür.
console.log(string.toLowerCase()) 
//toLowerCase(): bu metot string verisini küçük harflere dönüştürür.
console.log(string.slice(4, 9))
//substr(): İki arrgüman alır, başlangıç indeksi ve silenecek karakter sayısı.
console.log(string.substring(0, 4))
//substring(): Başlangıç indeksi ve durma indeksi olmak üzere iki argüman almaktadır.
console.log(string.split("S")) 
//split(): Bu metot bir stringi belirtilen yerden bölmeye yarar. ( array oluşturuyor )
console.log(string.trim('a'))
//trim(): String'in başında ve sonundaki boşlukları silmeye yarar.
console.log(string.includes('java'))
//includes(): Bu metot string içerisinde varlık kontrolü yapmaya yarar. Eğer bulursa true, bulamazsa false döner. ( birebir arama yapar )
//replace(): Bu metot string içerisinde değiştirme yapmamızı sağlar. Eski ve Yeni olmak üzere iki argüman alır.
//charAt(): Stringdeki indeksi belirttiğinizde o indeksin değerini yazdırır.

//Veri türünü değiştirme 
let sayi = '10'
let sayiInt = parseInt(sayi)
console.log(sayiInt) // 10

//String to Float
let sayibir = '9.81'
let sayibirFloat = parseFloat(sayibir)

console.log(sayibirFloat) // 9.81

//Float to Int
let sayiIki = 9.81
let sayiIkiInt = parseInt(sayiIki)

console.log(sayiIkiInt) // 9



//

let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(challenge[0]))
console.log(challenge.includes("Script"))
console.log(challenge.split(" ")) 
let list = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(list.split(","))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt([15]))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))

let cumleBir = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
console.log(cumleBir.indexOf("çünkü"))
console.log(cumleBir.lastIndexOf("çünkü"))

console.log(challenge.trim())

console.log(challenge.startsWith())
console.log(challenge.padEnd())
console.log(challenge.match("a"))

let x = '30 Days of'
let y = 'JavaScript'
let result  = x.concat(" ", y)
console.log(result)

console.log(challenge.repeat(2))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

stringOn = "10"
numberOn = 10
console.log(parseInt(stringOn) == numOne)

let numberY = "9.8"
console.log(parseFloat(numberY) == numOne)


let wordOne = "python"
let wordTwo = "jargon"
console.log(wordOne.includes("on"))
console.log(wordTwo.includes("on"))

const sayiUret= Math.floor(Math.random () * 101) // 0 ile 100 arasında rastgele sayı oluşturur
console.log(sayiUret)

const sayiUretElli = Math.floor(Math.random() * 51)
console.log(sayiUretElli)

const sayiUretBesElli = Math.floor(Math.random() * 256)
console.log(sayiUretBesElli)

let wordThree = "Javascript"
let lengtThree = wordThree.length
let randomwordThree = Math.floor(Math.random() * lengtThree)
console.log(randomwordThree)

let sentenceOne = "'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'"
console.log(sentenceOne.substring(37, 49))

let sentenceTwo = 'love is the best thing in this world. Some have found their love and some are still looking for their love.'
let wantedWord = "love"
let sonucIki = sentenceTwo.split(wantedWord).length - 1
console.log(sonucIki)

const sentenceThree = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let newSentence = sentenceThree.replace(/[%$@&#]/g, '')
console.log(newSentence)

const sentenceFour = "Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor."
let regEx = /\d+/
let newList = sentenceFour.match(/\d+/g);
let gelirBir = parseInt(newList[0])
let gelirIki = parseInt(newList[1])
let gelirUc = parseInt(newList[2])
let toplamGelir = gelirBir + gelirIki + gelirUc
console.log(toplamGelir)
