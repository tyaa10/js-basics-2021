/* Constants n variables */

// const four = 4
/* const FOUR_NUMBER = 4

console.log('Hello "JS"!')
console.log("Hello 'JS'! - 2")
console.log("Hello 'JS'! -" + " 3")
console.log(`Hello 'JS'! - ${FOUR_NUMBER}`) */

/* var x = 100
x = '100'

if (true) {
  var x = 911
  // x = 911
}

console.log(`x = ${x}`) */

/* let x = 100
x = '100'
// let x = 911

if (true) {
  let x = 911
  console.log(`x = ${x}`)
}

console.log(`x = ${x}`) */


/* Embedded types */

/* x = 100
// let x = 100
if (true) {
  let x = 911
  console.log(`x = ${x}`)
}
console.log(`x = ${x}`) */

// number, string, boolean, undefined, null, bigint
// object

// console.log(y)

// const y
// let y

// console.log(y)
// console.log(y + 1)

// console.log(3 + 1 == 3 + 1)
// console.log(3 + 1 == 4)
// console.log(3 + 1 == '4')
// console.log(3 + 1 === '4')
// console.log(3 + 1 === 4)
// console.log(y + 1 == y + 1)
// console.log(y + 1 === y + 1)
// console.log(Number.isNaN(y + 1) === Number.isNaN(y + 1)) // true === true
// console.log(100 / 0)
// console.log(100 / -0)
// const z = null
// const z = undefined


/* Functions */

// function foo () {}
// foo()

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2(1, 5) */

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2('dfd', 'dsvf') */

/* function foo2 (a, b) {
  console.log(a + b)
}
foo2() */

/* function foo3 () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* function foo3 () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* const foo3 = function () {
  console.log(arguments[0] + arguments[1])
}
foo3(2, 7) */

/* const foo4 = (a, b) => {
  console.log(a + b)
}
foo4(2, 7) */

function fib (n) {
  if (n < 2) {
    return n
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

for (let index = 0; index < 13; index++) {
  console.log(fib(index))
}

// Task
// https://en.wikipedia.org/wiki/Factorial