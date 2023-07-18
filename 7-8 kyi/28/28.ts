export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
	let countSheepOfArr = 0

	arrayOfSheep.forEach(sheep => sheep === true ? countSheepOfArr++ : '')

	return countSheepOfArr
}