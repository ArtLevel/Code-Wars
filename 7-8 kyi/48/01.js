const giveMeFive = (obj) => {
	const result = []

	for(const key in obj) {
		key.length === 5 ? result.push(key) : ''
		obj[key].length === 5 ? result.push(obj[key]) : ''
	}

	return result
}

console.log(giveMeFive({Pears: 'than', apple: 'sweet'}))