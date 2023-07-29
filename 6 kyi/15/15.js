function toCamelCase(str) {
	const symbolsArr = str.split('')

	symbolsArr.forEach((el, index) => {
		if(el === '-' || el === '_') symbolsArr[index + 1] = symbolsArr[index + 1].toUpperCase()
	})

	return symbolsArr.filter(el => el !== '-' && el !== '_').join('')
}


console.log(toCamelCase('the_stealth_warrior'))