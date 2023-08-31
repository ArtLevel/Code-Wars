const padIt = (str,n) => {
	let i = 0
	let result = str

	do {
		i++
	  i % 2 === 0 ?	result = result + '*' :  result = '*' + result
	} while (i < n)
	return result
}

console.log(padIt('a', 3))