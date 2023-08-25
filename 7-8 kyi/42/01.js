const solution = (a, b) => {
	if(a.length > b.length) return b + a + b
	if(a.length < b.length) return a + b + a
}

console.log(solution('13', '200'))