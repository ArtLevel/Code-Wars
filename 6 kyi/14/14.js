const findOdd = (numsArr) => {
	const countNumsOfArr = {}
	let oddNum = 0

	numsArr.forEach(el => {
		if (countNumsOfArr[el]) {
			countNumsOfArr[el] += 1
		}

		if (!countNumsOfArr[el]) {
			countNumsOfArr[el] = 1
		}
	})

	for(let key in countNumsOfArr) {
		const num = countNumsOfArr[key]

		if(num % 2 !== 0) {
			oddNum = Number(key)
		}
	}

	return oddNum;
};

console.log(findOdd([0,1,0,1,0]))
