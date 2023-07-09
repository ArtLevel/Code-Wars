function count(string) {
	if(string.length === 0)	return {}

	const symbolsObj = {}

	const strArr = string.split('')

	strArr.forEach(symbol => {
		if(!symbolsObj[symbol]) {
			symbolsObj[symbol] = 1
		} else {
			symbolsObj[symbol] += 1
		}
	})

	return symbolsObj
}

console.log(count('abasdfasdfasdfasdfasdf'))