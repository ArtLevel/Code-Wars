const getLengthOfMissingArray = (arrayOfArrays) =>{
	if (!arrayOfArrays) return 0
	if (arrayOfArrays.length === 0) return 0

	if(arrayOfArrays.some(el => !el)) {
		return 0
	}

	let result = 0

	arrayOfArrays.forEach(el => {
		if(el.length === 0) result = false
	})

	if(result === false) {
		return 0
	}

	const sortedArr = [...arrayOfArrays].sort((arr, nextArr) => arr.length - nextArr.length)
	let length = 0
	let lengthOfTheFirstItemOfArr = 0

	sortedArr.forEach((el, i) => {
		if(i === 0) {
			length = el.length
			lengthOfTheFirstItemOfArr = el.length
		}

		if(el.length > length && el.length - length === 1) {
			length = el.length
		} else {
			length = el.length
			result = i
		}
	})

	return result + lengthOfTheFirstItemOfArr
}

console.log(getLengthOfMissingArray(
	[],
	[4, 1, 3, 1],
	[3],
	[0, 2],
	[0, 0, 3, 2, 4]
)) // 0
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


console.log(getLengthOfMissingArray(
	[ [ 1, 2, 2 ], null ]
))


