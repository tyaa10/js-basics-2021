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

/* for (let index = 0; index < 13; index++) {
  console.log(fib(index))
} */

// Task
// https://en.wikipedia.org/wiki/Factorial

/* function factorial (n) {
  let result = n
  for (let i = 1; i < n; i++) {
    // console.log(`1) i = ${i}, n = ${result}`)
    result *= i
    // console.log(`2) i = ${i}, n = ${result}\n`)
  }
  return result
}

function factorialRecursion (n) {
  if (n <= 0) {
    return 1
  } else {
    return (n * factorialRecursion(n - 1))
  }
}

console.log(factorialRecursion(5))

console.log(factorial(5)) */

/* function foo (action) {
  // console.log(action)
  if (action) {
    console.log('Performing an action: ')
    action()
  }
}

foo(() => console.log(`2 * 2 = ${2 * 2}`))
foo(() => console.log(`3 * 3 = ${3 * 3}`))
foo() */

/* function intSort (integers) {
  let isSorted = false
  do {
    isSorted = true
    for (let i = 0; i < integers.length - 1; i++) {
      const currentElement = integers[i]
      const nextElement = integers[i + 1]
      if (currentElement - nextElement < 0) {
        const temporaryElement = integers[i]
        integers[i] = integers[i + 1]
        integers[i + 1] = temporaryElement
        isSorted = false
      }
    }
  } while (!isSorted)
}

const integers = [1, -9, 0, 7, 200, 201, 107, -7, 0]
intSort(integers)
console.log(integers) */

/* function uSort (elements, comparator) {
  let isSorted = false
  do {
    isSorted = true
    for (let i = 0; i < elements.length - 1; i++) {
      const currentElement = elements[i]
      const nextElement = elements[i + 1]
      if (comparator(currentElement, nextElement) < 0) {
        const temporaryElement = elements[i]
        elements[i] = elements[i + 1]
        elements[i + 1] = temporaryElement
        isSorted = false
      }
    }
  } while (!isSorted)
} */

// const integers = [1, -9, 0, 7, 200, 201, 107, -7, 0]
/* function intComaratorDesc (a, b) {
  return a - b
} */
// uSort(integers, intComaratorDesc)
// uSort(integers, (a, b) => b - a)
// console.log(integers)

/* const strings = ['John', 'Bill', 'Yurii', 'Maria']
uSort(strings, (a, b) => b.localeCompare(a))
console.log(strings) */

const people = [
  {
    'name': 'John',
    'age': 30
  },
  {
    'name': 'Bill',
    'age': 35
  },
  {
    'name': 'Yurii',
    'age': 25
  },
  {
    'name': 'Maria',
    'age': 20
  }
]

// uSort(people, (a, b) => b.name.localeCompare(a.name))
// uSort(people, (a, b) => b['name'].localeCompare(a['name']))
// uSort(people, (a, b) => a.age - b.age)
// console.log(people)

// streams

/* people.sort((a, b) => a.name.localeCompare(b.name))
  .filter(person => person.age > 21)
  .map(person => `${person.name} (${person.age} y.o.)`)
  .forEach(person => console.log(person)) */

const filteredPeople =
  people.sort((a, b) => a.name.localeCompare(b.name))
    .filter(person => person.age > 21)
const ageSum = filteredPeople.reduce((result, person) => result += person.age, 0)

console.log(ageSum / filteredPeople.length)

