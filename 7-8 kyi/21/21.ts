export const summation = (num: number)=> {
	let sumOfNum: number = 0

	for(let i = 0; i <= num; i++) {
		sumOfNum += i
	}

	return sumOfNum
}