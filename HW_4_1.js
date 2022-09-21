// HomeWork _4
// 1. Выведете с помощью for цикла рецепт всех видов кофе или цену на все размеры стаканчиков, идеально и то, и другое.

const americano = 'Americano'
const capuchino = 'Capuchino'
const latte = 'Latte'

let small = 'small'// 250 ml
let medium = 'medium'// 350 ml
let big  = 'big' // 500 ml

let recipeAmericanoSmall = '1. Water(100 ml)\n2. Coffee(150 ml)'
let recipeCapuchinoSmall = '1. Water(100 ml)\n2. Coffee(75 ml)\n3. Milk(75 ml)'
let recipeLatteSmall = '1. Water(80 ml)\n2. Milk(80 ml)\n3. Coffee(50 ml)\n4. Frothed milk(40 ml)'

let recipeAmericanoMedium = '1. Water(170 ml)\n2. Coffee(180 ml)'
let recipeCapuchinoMedium = '1. Water(140 ml)\n2. Coffee(110 ml)\n3. Milk(100 ml)'
let recipeLatteMedium = '1. Water(100 ml)\n2. Milk(110 ml)\n3. Coffee(80 ml)\n4. Frothed milk(60 ml)'

let recipeAmericanoBig = '1. Water(150 ml)\n2. Coffee(350 ml)'
let recipeCapuchinoBig = '1. Water(150 ml)\n2. Coffee(200 ml)\n3. Milk(150 ml)'
let recipeLatteBig = '1. Water(150 ml)\n2. Milk(100 ml)\n3. Coffee(150 ml)\n4. Frothed milk(100 ml)'

let priceSmall = '2 USD\n'
let priceMedium = '4 USD\n'
let priceBig = '6 USD\n'

let viewOnScreenAllDatas = [
    americano, small, recipeAmericanoSmall, priceSmall,
    americano, medium, recipeAmericanoMedium, priceMedium,
    americano, big, recipeAmericanoBig, priceBig,
    capuchino, small, recipeCapuchinoSmall, priceSmall,
    capuchino, medium, recipeCapuchinoMedium, priceMedium,
    capuchino, big, recipeCapuchinoBig, priceBig,
    latte, small, recipeLatteSmall, priceSmall,
    latte, medium, recipeLatteMedium, priceMedium,
    latte, big, recipeLatteBig, priceBig
]

let allDatas = ''

for (let i = 0; i < viewOnScreenAllDatas.length; i++) {
    allDatas = `${allDatas + viewOnScreenAllDatas[i]}\n`
}
console.log(allDatas)



// 2. При помощи цикла for выведите чётные числа от 2 до 10

for (let i = 2; i <= 10; i = i + 2) {
    console.log(i)
}


// 3. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.

let n = 10
for (let i = 2; i <= n; i++) {
    let num = true
    for (let k = 2; k < i; k++){
        if (i % k == 0) {
            num = false
        }
    }
    if (num == true) {
        console.log(i)
    }
}

// 4. Задача на смекалку
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
 
let sentence = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'

let newSentence = ''

for (let i = 0; i < sentence.length; i = i + 3) {
        
     newSentence = newSentence + sentence[i]
    } 
console.log(newSentence)




// 5. Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему


function cryptographer(sentence) {

let encryptedSentence = ''
let cipher = 'aEh'

for (let i = 0; i < sentence.length; i ++) {

    encryptedSentence = encryptedSentence + sentence[i] + cipher

} return encryptedSentence
}

console.log(cryptographer('My name is Yury Selivanov'))



function decoder(sentence) {

let decoder = ''

for(i = 0; i < sentence.length; i += 4) {

    decoder = decoder + sentence[i]

} return decoder
}

console.log(decoder('MaEhyaEh aEhnaEhaaEhmaEheaEh aEhiaEhsaEh aEhYaEhuaEhraEhyaEh aEhSaEheaEhlaEhiaEhvaEhaaEhnaEhoaEhvaEh'))

// 6. Задача*
// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).


 let array = [ '(', ')', '(', ')', ')'] 

 let summ1 = 0
 let summ2 = 0

 for (let i = 0; i < array.length; i++) {
    if (array[i] == '(') {
        summ1++
    } else if (array[i] == ')') {
        summ2++
    } 
 } 
let result = (summ1 == summ2) ? 'Each bracket has a pair' : 'Lacks brackets'

console.log(result)