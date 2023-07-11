/*

	Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

	Examples input/output:

	XO("ooxx") => true
	XO("xooxx") => false
	XO("ooxXm") => true
	XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
	XO("zzoo") => false
*/

function XO(str) {
	const countSymbolsOfArr = {}
	const symbols = []

	str.split('').forEach((symbol) => {
		const symbolToLowerCase = symbol.toLowerCase()
		if (!countSymbolsOfArr[symbolToLowerCase]) {
			countSymbolsOfArr[symbolToLowerCase] = 1
			symbols.push(symbolToLowerCase)
		} else {
			countSymbolsOfArr[symbolToLowerCase] += 1
		}
	})

	return countSymbolsOfArr[symbols[0]] === countSymbolsOfArr[symbols[1]]
}

console.log(XO('ssssssstt'))