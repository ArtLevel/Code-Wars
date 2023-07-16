function solution(roman) {
	const romanSymbolInNumber = {
		I: 1,
		II: 2,
		III: 3,
		IV: 4,
		V: 5,
		VI: 6,
		VII: 7,
		VIII: 8,
		IX: 9,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}

	let strangeNumbers = 0

	if (roman.includes('IV')) {
		roman = roman.replace('IV', '')
		strangeNumbers += 4
	}

	if (roman.includes('IX')) {
		roman = roman.replace('IX', '')
		strangeNumbers += 9
	}

	if (roman.includes('XL')) {
		roman = roman.replace('XL', '')
		strangeNumbers += 40
	}

	if (roman.includes('XC')) {
		roman = roman.replace('XC', '')
		strangeNumbers += 90
	}

	if (roman.includes('CM')) {
		roman = roman.replace('CM', '')
		strangeNumbers += 900
	}

	if (roman.includes('CD')) {
		roman = roman.replace('CD', '')
		strangeNumbers += 400
	}

	const sumOfArrWithoutStrangeNumbers = roman
		.split('')
		.map((symbol) => {
			return Number(romanSymbolInNumber[symbol])
		})
		.reduce((num, curValue) => num + curValue, 0)

	return sumOfArrWithoutStrangeNumbers + strangeNumbers
}

console.log(solution('DCXCV'))
