function digPow(numbers, p) {
	const numbersArr = String(numbers)
		.split('')
		.map((numStr) => parseInt(numStr))

	let x = 0

	for (let i = p; numbersArr[x] !== undefined; i++) {
		numbersArr[x] = numbersArr[x] ** i
		x++
	}

	const sumNumOfArr = numbersArr.reduce((num, curValue) => num + curValue, 0)

	return Math.round(sumNumOfArr / numbers) === sumNumOfArr / numbers
		? sumNumOfArr / numbers
		: -1
}

console.log(digPow(46288, 3))
