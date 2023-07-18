const reverseSeq = (n) => {
	const numbersArr = []

	for(let i = n; n >= 1; i--) {
		console.log(i)
		numbersArr.push(i)
	}

	return numbersArr
}

reverseSeq(2)
