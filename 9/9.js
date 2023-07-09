function solution(string) {
	const symbolArr = string.split('')
	return symbolArr.map(symbol => symbol.toUpperCase() === symbol ? ' ' + symbol : symbol).join('')
}

const str2 = 'camelCasing'

console.log(solution(str2))