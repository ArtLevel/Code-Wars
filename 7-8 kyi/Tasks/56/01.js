const timedReading = (maxLength, textArr) => {
	const badSymbolsObj = {
		',': false,
		'\'': false,
		'?': false,
		'!': false,
		'.': false
	}

	const finalArr = textArr
		.split('')
		.filter(symbol => badSymbolsObj[symbol] === undefined)
		.join('')
		.split(' ')
		.filter(el => el.length <= maxLength)

	return finalArr[0] !== '' ? finalArr.length : 0
}

console.log(timedReading(1, '...'))