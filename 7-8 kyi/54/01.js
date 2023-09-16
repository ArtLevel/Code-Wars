const sumOfIntegersInString = (s) => {
	return [...s]
		.map(el => Number(el) || el === '0' ? el : ' ')
		.join('')
		.split(' ')
		.filter(el => el !== '')
		.map(Number)
		.reduce((acc, num) => acc + num, 0)
}

console.log(sumOfIntegersInString('asdfkjlasdjfk1234lkjkljlk412'))