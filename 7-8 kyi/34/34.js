function powerOf4(n) {
	if (!Number.isInteger(n)) return false
	const sqrt = Math.log(n) / Math.log(4)

	return sqrt % 2 === 0
}

console.log(powerOf4(16384))