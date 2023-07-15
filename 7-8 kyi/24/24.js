function sumOfMinimums(arr) {
	const minNumsOfArr = []

	for(let i = 0; i < arr.length; i++) {
		const nestedArr =	arr[i]
		const minNum = Math.min.apply(null, nestedArr)

		minNumOfArrays.push(minNum)
	}

	const sumOfNum = minNumOfArrays.reduce((num, curValue) => num + curValue, 0)

	return sumOfNum
}

console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]))