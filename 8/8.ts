export const likes = (a : string[]) : string => {
	const countOthersOfLikeThis = a.length - 2

	if(a.length === 0) return `no one likes this`
	if(a.length === 1) return `${a[0]} likes this`
	if(a.length === 2) return `${a[0]} and ${a[1]} like this`
	if(a.length === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`
	return `${a[0]}, ${a[1]} and ${countOthersOfLikeThis} others like this`
}