export function squareSum(numbersArr: number[]): number {
	const newArrNumbers: number[] = numbersArr.map(number => number ** 2)
	const sumOfArr = newArrNumbers.reduce((num, curValue) => num + curValue, 0)

	return sumOfArr
}