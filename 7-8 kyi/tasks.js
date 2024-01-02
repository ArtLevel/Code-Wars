// 6 kyu
// Length of missing array

// const getLengthOfMissingArray = (arrayOfArrays) =>{
// 	if (!arrayOfArrays) return 0
// 	if (arrayOfArrays.length === 0) return 0
//
// 	if(arrayOfArrays.some(el => !el)) {
// 		return 0
// 	}
//
// 	let result = 0
//
// 	arrayOfArrays.forEach(el => {
// 		if(el.length === 0) result = false
// 	})
//
// 	if(result === false) {
// 		return 0
// 	}
//
// 	const sortedArr = [...arrayOfArrays].sort((arr, nextArr) => arr.length - nextArr.length)
// 	let length = 0
// 	let lengthOfTheFirstItemOfArr = 0
//
// 	sortedArr.forEach((el, i) => {
// 		if(i === 0) {
// 			length = el.length
// 			lengthOfTheFirstItemOfArr = el.length
// 		}
//
// 		if(el.length > length && el.length - length === 1) {
// 			length = el.length
// 		} else {
// 			length = el.length
// 			result = i
// 		}
// 	})
//
// 	return result + lengthOfTheFirstItemOfArr
// }
//
// console.log(getLengthOfMissingArray(
// 	[],
// 	[4, 1, 3, 1],
// 	[3],
// 	[0, 2],
// 	[0, 0, 3, 2, 4]
// )) // 0
//
// console.log(getLengthOfMissingArray(
// 	[]
// ))
//
// console.log(getLengthOfMissingArray(
// 	null
// ))
//
//
// console.log(getLengthOfMissingArray(
// 	[ [], [ 1, 2, 2 ] ]
// ))
//
//
// console.log(getLengthOfMissingArray(
// 	[ [ 1, 2, 2 ], null ]
// ))
//
//

// 6 kyu
// Find the missing letter

// const findMissingLetter = (array) => {
// 	const letters = [
// 		'a', 'b', 'c', 'd', 'e',
// 		'f', 'g', 'h', 'i', 'j',
// 		'k', 'l', 'm', 'n', 'o', 'p',
// 		'q', 'r', 's', 't', 'u',
// 		'v', 'w', 'x', 'y', 'z'
// 	]
//
// 	let idTheFirstLetter
// 	let count = 1
// 	let result = ''
//
// 	array.map(el => el.toLowerCase()).forEach((el, i) => {
// 		if(i === 0) idTheFirstLetter = letters.indexOf(el)
//
// 		if(i > 0) {
// 			if(el === letters[idTheFirstLetter + count]) {
// 				count += 1
// 			} else {
// 				result = letters[idTheFirstLetter + count]
// 			}
// 		}
// 	})
//
// 	return array[0].toUpperCase() === array[0] ? result.toUpperCase() : result
// }
//
// console.log(findMissingLetter(['c','d','e','f','h','i']))

// 6 kyu
// Replace With Alphabet Position

// const alphabetPosition = (text) => {
// 		const letters = [
// 		'a', 'b', 'c', 'd', 'e',
// 		'f', 'g', 'h', 'i', 'j',
// 		'k', 'l', 'm', 'n', 'o', 'p',
// 		'q', 'r', 's', 't', 'u',
// 		'v', 'w', 'x', 'y', 'z'
// 	]
//
// 	return text.split('')
// 		.map(el => el.toLowerCase())
// 		.map(el => letters.indexOf(el) !== -1 ? letters.indexOf(el) + 1 : '')
// 		.filter(el => el !== '')
// 		.join(' ')
// }
//
// console.log(alphabetPosition('The sunset sets at twelve o\' clock.'))

// 6 kyu
// Array.diff

// const arrayDiff = (aArr, bArr) => {
// 		return aArr.filter(el => {
// 			for(let i = 0; bArr.length > i; i++) {
// 				if(el === bArr[i]) return false
// 			}
// 			return true
// 		})
// }
//
// console.log(arrayDiff([1,2,2,2,3],[2]))

// 6 kyu
// Stop gninnipS My sdroW!

// const spinWords = (string) =>  string.split(' ').map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
//
// console.log(spinWords("Just gniddik there is still one more"))

// 6 kyu
// Bit Counting

// const countBits = (n) => {
// 	let binaryArr = []
//
// 	for (let i = 0; n !== 0; i++) {
// 		binaryArr.push(n % 2)
// 		n = Math.floor(n / 2)
// 		i++
// 	}
//
// 	return binaryArr.reduce((accum, num) => accum + num, 0)
// }
//
// console.log(countBits(89))

// 6 kyu
// Counting Duplicates

// const duplicateCount = (text) => {
// 	const obj = {}
// 	let result = 0
//
// 	text.split('').map(el => el.toLowerCase()).forEach(el => {
// 		if(obj[el] === undefined) obj[el] = 1
// 		else obj[el] += 1
// 	})
//
// 	for (const objElement in obj) {
// 		if (obj[objElement] > 1) result += 1
// 	}
//
// 	return result
// }
//
// console.log(duplicateCount('abcddddaaa'))

// 6 kyu Persistent Bugger.

// const persistence = (num) => {
// 	let result = 0
//
// 	while(String(num).length > 1) {
// 		num = String(num).split('').map(Number).reduce((accum, num) => accum * num, 1)
// 		result += 1
// 	}
//
// 	return result
// }
//
// console.log(persistence(4))
//



// 6 kyu
// Duplicate Encoder

// const duplicateEncode = (word) => {
// 	const arr = word.split('').map(el => el.toLowerCase()).map(el => ({count: 0, symbol: el}))
// 	const symbolsArr = word.split('').map(el => el.toLowerCase())
//
// 	arr.forEach(el => {
// 		for (let i = 0; i < symbolsArr.length; i++) {
// 		  if(el.symbol === symbolsArr[i]) el.count += 1
// 		}
// 	})
//
// 	return arr.map(el => el.count > 1 ? ')' : '(').join('')
// }
//
// console.log(duplicateEncode('Supralapsarian')) // (()))())())()(

// )()))()))))()(

// 6 kyu
// Find The Parity Outlier

// const findOutlier = (integers) => {
// 	let flag = {odd: 0, even: 0}
//
// 	integers.forEach(el => {
// 		if(el % 2 !== 0) flag.even += 1
// 		else flag.odd += 1
// 	})
//
// 	if(flag.odd > flag.even) return integers.find((el) => el % 2 !== 0)
// 	else return integers.find((el) => el % 2 === 0)
// }
//
// console.log(findOutlier([0, 1, 2])) // odd
// console.log(findOutlier([1, 2, 3])) // even

// 6 kyu
// Detect Pangram
// const isPangram = (string) => {
// 	const letters = [
// 		'a', 'b', 'c', 'd', 'e',
// 		'f', 'g', 'h', 'i', 'j',
// 		'k', 'l', 'm', 'n', 'o', 'p',
// 		'q', 'r', 's', 't', 'u',
// 		'v', 'w', 'x', 'y', 'z'
// 	]
// 	let result = true
//
// 	const filteredArr = string.split('').map(el => el.toLowerCase()).filter(el => el !== '.' && el !== ' ')
//
// 	for (let i = 0; i < letters.length; i++) {
// 	if(!filteredArr.includes(letters[i])) result = false
// 	}
//
// 	return result
// }
//
// console.log(isPangram('Cwm fjord bank glyphs vext quiz'))

// 6 kyu
// Does my number look big in this?

// const narcissistic = (value) => {
// 	const valueOfString = String(value)
// 	const result = valueOfString.split('')
// 																			.map(el => Math.pow(Number(el), valueOfString.length))
// 																			.reduce((accum, num) => accum + num, 0)
//
// 	return result === value
// }
//
// console.log(narcissistic(153))


// 6 kyu
// Your order, please

// const order = (words) => {
// 	const wordsArr = words.split(' ')
//
// 	return wordsArr.sort((el, nextEl) => {
// 		let numOfEl
// 		let numOfNextEl
//
// 		for (let i = 0; i < el.length; i++) {
// 			if(Number(el[i])) {
// 				numOfEl = el[i]
// 			}
// 		}
//
// 		for (let i = 0; i < nextEl.length; i++) {
// 			if(Number(nextEl[i])) {
// 				numOfNextEl = nextEl[i]
// 			}
// 		}
//
// 		return numOfEl - numOfNextEl
// 	}).join(' ')
// }
//
// console.log(order('is2 Thi1s T4est 3a'))


// 6 kyu
// Build Tower

// const towerBuilder = (nFloors) => {
// 	let newArr = []
// 	let spaceStr = ''
//
// 	for (let i = 0; i < nFloors / 2; i++) spaceStr += ' '
//
// 	for (let i = 0; i < nFloors * 2; i += 2) {
// 		let str = '*'
//
// 		for (let j = 0; j < i; j++) str += '*'
//
// 		newArr.push(str)
// 	}
//
// 	return newArr.map((el, i) => {
// 		let newEl = el
//
// 		for (let j = 1; j < nFloors - i; j++) {
// 			newEl += ' '
// 			newEl = ' ' + newEl
// 		}
//
// 		return newEl
// 	})
// }
//
// console.log(towerBuilder(1000))

//
// 6 kyu
// Highest Scoring Word


// function high(str){
// 	const letters = [
// 		{ letter: 'a', point: 1 },
// 		{ letter: 'b', point: 2 },
// 		{ letter: 'c', point: 3 },
// 		{ letter: 'd', point: 4 },
// 		{ letter: 'e', point: 5 },
// 		{ letter: 'f', point: 6 },
// 		{ letter: 'g', point: 7 },
// 		{ letter: 'h', point: 8 },
// 		{ letter: 'i', point: 9 },
// 		{ letter: 'j', point: 10 },
// 		{ letter: 'k', point: 11 },
// 		{ letter: 'l', point: 12 },
// 		{ letter: 'm', point: 13 },
// 		{ letter: 'n', point: 14 },
// 		{ letter: 'o', point: 15 },
// 		{ letter: 'p', point: 16 },
// 		{ letter: 'q', point: 17 },
// 		{ letter: 'r', point: 18 },
// 		{ letter: 's', point: 19 },
// 		{ letter: 't', point: 20 },
// 		{ letter: 'u', point: 21 },
// 		{ letter: 'v', point: 22 },
// 		{ letter: 'w', point: 23 },
// 		{ letter: 'x', point: 24 },
// 		{ letter: 'y', point: 25 },
// 		{ letter: 'z', point: 26 }
// 	]
//
// 	return str.split(' ')
// 		.map(str =>  ({
// 				points: str
// 					.split('')
// 					.map(el => letters.find(obj => obj.letter === el))
// 					.reduce((accum, obj) => accum + obj.point, 0),
// 				str
// 			})
// 		).sort((el, nextEl) => nextEl.points - el.points)[0].str
// }
//
// console.log(high('man i need a taxi up to ubud'))
//

// 6 kyu
// Two Sum

// const twoSum = (numbers, target) => {
// 	let result = []
//
// 	for (let i = 0; i < numbers.length; i++) {
// 		for (let j = 1; j < numbers.length; j++) {
// 			if(numbers[i] + numbers[j] === target) {
// 				result = [i, j]
// 				return result
// 			}
// 		}
// 	}
//
// 	return result
// }
//
// // console.log(twoSum([ 1, 2, 3 ], 4))
// console.log(twoSum([ 2, 2, 3 ], 4))

// A: От 1 до n
//
// Дано натуральное число
// Выведите все числа от 1 до

// const log = (n) => {
// 	if(n > 1) {
// 		console.log(n)
// 		return log(n - 1)
// 	} else {
// 		return n
// 	}
// }
//
// console.log(log(5))


// B: От A до B
// Даны два целых числа A и В (каждое в отдельной строке). Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае

// const log = (a, b) => {
// 	if (b > a) {
// 		console.log(b)
// 		return log(a, b - 1)
// 	} else {
// 		return a
// 	}
// }
//
// console.log(log(5, 9500))

// const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
//
// let minValue = numbers[0]
//
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] < minValue) {
// 		minValue = numbers[i]
// 	}
// }
//
// console.log(minValue)

// generators

// function* foo() {
//  yield
//
// // return {
// //  value: value,
// //  done: true/false
// // }
// }

// function* generateSalaryWithBonus(salary) {
//   console.log('start generation function')
//   // const a = yield salary + (salary / 100) * 15
//   // console.log(a)
//   // return yield
//   // yield salary + (salary / 100) * 20
//   // yield salary + (salary / 100) * 25
//
//   yield salary + (salary / 100) * 15 // STOP 15
//   console.log('generation function after firs yield')
//   yield salary + (salary / 100) * 20 // 2 STOP
//   console.log('generation function after firs yield')
//
//   // yield salary + (salary / 100) * 30
//   // yield salary + (salary / 100) * 35
//   // console.log('after yield')
// }
//
// const generator = generateSalaryWithBonus(2000)
//
// console.log(generator.next())
// console.log(generator.next(15))
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// generator

function* generateRandom() {
  // while (true) {
  //   const random = yield Math.floor(Math.random() * 1000)
  //   // yield random
  // }
  yield 1
  yield 2
  yield 3
}

function* multipleValues() {
  yield* generateRandom ()
  yield* generateRandom ()
  yield* generateRandom ()
}

const random = multipleValues()

console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)
console.log(random.next().value)

// console.log(random2.next().value)
// console.log(random2.next().value)
// console.log(random2.next().value)

const foo = async () => {
  const dataFromYahoo = await fetch('https://yahoo.com/?query=js')
  console.log('dataFromYahoo', dataFromYahoo.url)
}

foo()

const foo2 = newAsync(function*(){
  const dataFromYahoo = yield fetch('https://yahoo.com/?query=js')
  console.log('dataFromYahoo', dataFromYahoo.url)
})

function newAsync(generationFunction) {
  return function() {
    const generator = generationFunction()

    function resolve(next) {
      if(next.done) {
        return Promise.resolve(next.value)
      }

      return Promise.resolve(next.value).then(res => {
        return resolve(generator.next(res))
      })
    }

    return resolve(generator.next)
  }
}
