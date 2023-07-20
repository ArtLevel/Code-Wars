export const reverseSeq = (n: number): number[] => {
	const numbersArr: number[] = []

	for(let i = n; i >= 1; i--) {
		numbersArr.push(i)
	}

	return numbersArr
}

const hello = () => alert('hello')
