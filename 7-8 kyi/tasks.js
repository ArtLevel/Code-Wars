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

const findMissingLetter = (array) => {
	const letters = [
		'a', 'b', 'c', 'd', 'e',
		'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p',
		'q', 'r', 's', 't', 'u',
		'v', 'w', 'x', 'y', 'z'
	]

	let idTheFirstLetter
	let count = 1
	let result = ''

	array.map(el => el.toLowerCase()).forEach((el, i) => {
		if(i === 0) idTheFirstLetter = letters.indexOf(el)

		if(i > 0) {
			if(el === letters[idTheFirstLetter + count]) {
				count += 1
			} else {
				result = letters[idTheFirstLetter + count]
			}
		}
	})

	return array[0].toUpperCase() === array[0] ? result.toUpperCase() : result
}

console.log(findMissingLetter(['c','d','e','f','h','i']))
