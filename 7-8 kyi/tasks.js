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

const findOutlier = (integers) => {
	let flag = {odd: 0, even: 0}

	integers.forEach(el => {
		if(el % 2 !== 0) flag.even += 1
		else flag.odd += 1
	})

	if(flag.odd > flag.even) return integers.find((el) => el % 2 !== 0)
	else return integers.find((el) => el % 2 === 0)
}

console.log(findOutlier([0, 1, 2])) // odd
console.log(findOutlier([1, 2, 3])) // even
