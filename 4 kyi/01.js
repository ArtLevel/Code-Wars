function sumStrings(a, b) {
	const arrA = a.split('').map(Number)
	const arrB = b.split('').map(Number)

	const result = []
	const count = arrA.length > arrB.length ? arrA.length : arrB.length

	for (let i = 0; i < count; i++) {
		if (arrA[i] && arrB[i]) {
			result.push(arrA[i] + arrB[i])
		}

		if (!arrA[i]) {
			result.push(arrB[i])
		}

		if (!arrB[i]) {
			result.push(arrA[i])
		}

	}

	return result.join('')
}

console.log(sumStrings('8797', '45'))