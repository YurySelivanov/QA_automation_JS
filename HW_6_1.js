// HomeWork_6

// 1. Напишите функцию с калькулятором, в которую, в качестве параметров, передаются три переменные, две - 
//  числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.

function calculate(a, b, operator) {
    if (operator == '+') {
        return a + b
    } else if (operator == '-') {
        return a - b
    } else if (operator == '*') {
        return a * b
    } else if (operator == '/') {
        if (b == 0) {
            return `Please enter another number, 'Zero' is not allowed`
        } else {
            return a / b
        }
    } else {
        return `Please enter another operator!`
    }
}

console.log(calculate(5, 3, '*'))


// 2. Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.

function greetment (name) {
    return `Hello my dear ${name}, we are glad to see you!!!`
}

const greet = (name) => `${greetment('Anna')} ${name} is waiting for you at the hotel right now!`
console.log(greet('Yury'))

// 3** There are n buildings in a line. You are given an integer array heights of size n that represents the heights of buildings.
// The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstruction.
// Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.
// For example: input heights = [4, 2, 3, 1] Ocean
                //output: [0, 2, 3]

function viewOceon(floors) {

    let index = []
    
    for (let i = 0; i < floors.length; i++) {
          
        let highest = true

      for (let j = i + 1; j < floors.length; j++) {                   

            if (floors[i] <= floors[j]) {
                highest = false               
            }             
        }          
            if (highest == true) {
                index.push(i)
            }      
    }   
    return index
}

console.log(viewOceon([5, 10, 10, 9, 3, 3]))