// HomeWork 5
// 1. Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1


const n = 9
let sum = ''
for (let i = 1; i <= n + 1; i++) {
        
    for (let j = n; j >= i; j--) {
        sum += ' '
    } 

    for (let j = 1; j <= i; j++) {
        sum += j % 10
    } 
    
    for (let j = i - 1; j >= 1; j--) {
        sum += j 
    } 

    sum += '\n'

} 

for (let i = n; i >= 1; i--) {

    for (let j = n; j >= i; j--) {
        sum += ' '
    } 
    for (let j = 1; j <= i; j++) {
        sum += j
    } 
    for (let j = i - 1; j >= 1; j--) {
        sum += j 
    } 
    sum += '\n'
} 
console.log(sum)





// 2 Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********

let star = 5
let result = ''
for (let i = 1; i <= star; i++) {

    for (let j = star; j >= i; j--) {
        result += ' '
    } 

    for (let j = 1; j <= i; j++) {
        result += '*'
    } 
    
    for (let j = i - 1; j >= 1; j--) {
        result += '*'
    } 

    result += '\n'
} 
console.log(result)



// 3. Нарисуйте пирамидку
// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15


let row = 5
let str = ''

for (let i = 1; i <= row; i++) {
    let num = i
    for (let j = 1; j <= i; j++) {
        str += num + ' ' 
        num = num + (row - j)
    } 
    str += '\n' 
}
console.log(str)
