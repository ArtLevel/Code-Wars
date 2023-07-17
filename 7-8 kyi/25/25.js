function removeSmallest(numbersArr) {
	const finalArr = numbersArr
	const minNum = Math.min.apply(null, finalArr)
	let minNimDelete = false

	return finalArr.map(num => {
		if(num !== minNum) return num
		if(!minNimDelete) {
			minNimDelete = true
			return ''
		}
		return num
	}).filter(num => num !== '')
}

console.log(removeSmallest([1, 2, 1, 3, 4, 5]))