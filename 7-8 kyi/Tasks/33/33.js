function divisors(integer) {
	const divisorsArr = []

	for(let i = 2; i < integer; i++) {
		if(Number.isInteger(integer / i)) {
			divisorsArr.push(i)
		}
	}

	if(divisorsArr.length === 0) return `${integer} is prime`
	return divisorsArr
}

console.log(divisors(13))