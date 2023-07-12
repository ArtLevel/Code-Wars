export function findShort(s: string): number {
  const lengthStrArr = s.split(' ').map(str => str.length)

	return Math.min.apply(null, lengthStrArr)
}