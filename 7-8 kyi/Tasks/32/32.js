function add (...n) {
	return n.reduce((num, curValue) => num + curValue, 0)
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))