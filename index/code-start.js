// 1. Сколько раз каждый элемент встречается в массиве:
// {kiwi: 3, apple: 2, orange: 1}

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const obj1 = {}

fruits.forEach(el => {
  if(obj1[el] === undefined) obj1[el] = 1
  else obj1[el] += 1
})

console.log(obj1)


// 2. Создать массив который содержит только уникальные значения
// ['kiwi', 'apple', 'orange']

const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// const sortedMyFruit = myFruits.filter(el => {
//   let count = 0
//
//   for (let i = 0; i < myFruits.length; i++) {
//     if(el === myFruits[i] && count > 0) return false
//     else if (el === myFruits[i]) count += 1
//   }
//
//   return true
// })

const newArr = []
const obj2 = {}

myFruits.forEach(el => {
  if(obj2[el] === undefined) obj2[el] = 1
  else obj2[el] += 1
})

for (const obj2Key in obj2) {
  newArr.push(obj2Key)
}

console.log(newArr)

// 3. Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст, 
// а значение - массив студентов
// { 
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
]

function group(arr) {
  const obj = {}

  arr.forEach(el => {
    const stringEl = String(el.age)

    if(obj[stringEl] === undefined) obj[stringEl] = [el]
    else obj[stringEl].push(el)
  })

  return obj
}

console.log(group(students))



// 4. Написать функцию, которая принимает два аргумента: 
// массив из уникальных целых чисел и сумму в виде целого числа. 
// Если сумма двух любых чисел массива из аргумента равна числу, 
// которое приходит вторым аргументом, функция должна 
// вернуть новый массив из этих двух чисел в любом порядке. 
// Если решения нет, вернуть пустой массив.

// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;


function twoNumbers(numbers, sum) {
  let result = []

  numbers.forEach(el => {
    for (let i = 0; i < numbers.length; i++) {
      if(el + numbers[i] === sum) result = [el, numbers[i]]
    }
  })

  return result
}

console.log(twoNumbers(myNumbers, sum))



// 5. Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'meat', 'fish']
const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];

const pizzas =friends.map(el => el.pizzas)
console.log(pizzas)

// 6. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
const myStr = 'pizza';

console.log(myStr.split('').reverse().join(''))
