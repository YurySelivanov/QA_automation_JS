// 3.1 Напишите программу калькулятора с If  или switch, обработайте возможные ошибки ввода (/0) или любые другие

        // применяем конструкцию if

function calculator (num1, num2, operator) {

    let result
if (operator == '+') {
    return result = num1 + num2
} else if (operator == '-') {
    return result = num1 - num2
} else if (operator == '*') {
    return result = num1 * num2
} else if (operator == '/') {
    if (num2 == 0) {
        return `Please enter another number, 'Zero' is not allowed`
    } else {
    return result = num1 / num2
    }
} else {
    return `Please enter another operator!`
}
}
console.log(calculator (4, 0, '/'))

        // применяем конструкцию switch

function calculator (num1, num2, operator) {

    let result
switch (operator) {

case '+': return result = num1 + num2
break

case '-': return result = num1 - num2
break

case '*': return result = num1 * num2
break

case '/': switch (num2) {
    case 0 : return `Please enter another number, 'Zero' is not allowed`
    break
    default : return result = num1 / num2
} break
    
default: return `Please enter another operator!`
}
}
console.log(calculator (4, 2, '/'))


// 3.2 Внедрить в свою программу с кофе вложенный if, else

// (2.1 Write the following program:
// - The client must have a choice of two (or three) types of coffee (your choice).
// - Give different names to your types of coffee.
// - Set the price of coffee depending on the size of the cup (small, medium, big).
// - Display the name, then the recipe of the selected coffee (use variables to change the recipe), and its cost.
// - Coffee components do not affect the cost.
// - Use an appropriate combination of if, (else if), else statements to solve your problem)

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

let priceSmall = '2 USD'
let priceMedium = '4 USD'
let priceBig = '6 USD'

function Coffee(sort, size) {

    if (sort == americano) {
        if (size == small){
            return `Your coffee is ${americano} ${size}\nRecipe coffee is\n${recipeAmericanoSmall}\nPrice is ${priceSmall}`
        } else if (size == medium) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeAmericanoMedium}\nPrice is ${priceMedium}`
        } else if (size == big) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeAmericanoBig}\nPrice is ${priceBig}`
        }
    } else if (sort == capuchino) {
        if (size == small) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeCapuchinoSmall}\nPrice is ${priceSmall}`
        } else if (size == medium) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeCapuchinoMedium}\nPrice is ${priceMedium}`
        } else if (size == big) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeCapuchinoBig}\nPrice is ${priceBig}`
        }
    } else if (sort == latte) {
        if (size == small) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeLatteSmall}\nPrice is ${priceSmall}`
        } else if (size == medium) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeLatteMedium}\nPrice is ${priceMedium}`
        } else if (size == big) {
            return `Your coffee is ${sort} ${size}\nRecipe coffee is\n${recipeLatteBig}\nPrice is ${priceBig}`
        }
    } else {
        return `There is not such a coffee`
    }
}
console.log(Coffee('Capuchino', 'medium'))



