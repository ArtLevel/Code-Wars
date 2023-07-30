function powerOf4(n) {
	if (!Number.isInteger(n)) return false
	const sqrt = Math.log(n) / Math.log(4)

	return Number.isInteger(sqrt)
}

console.log(powerOf4(64))