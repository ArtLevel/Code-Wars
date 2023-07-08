function digitalRoot(numbers) {
	const numbersArray = String(numbers)
		.split('')
		.map((num) => Number(num))

	let sumNumbers

	sumNumbers = numbersArray.reduce((num, curValue) => num + curValue, 0)

	if (String(sumNumbers).length > 1) {
		for (let i = 0; i <= String(sumNumbers).length; i++) {
			sumNumbers = String(sumNumbers)
				.split('')
				.map((num) => Number(num))
				.reduce((num, curValue) => num + curValue, 0)
		}
	}

	return sumNumbers
}

console.log(digitalRoot(493193))
