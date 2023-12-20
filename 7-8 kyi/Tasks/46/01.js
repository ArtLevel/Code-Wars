const pickIt = (arr) => {
	const odd = [],
				even = []

	for(let i = 0; i < arr.length; i++) arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i])

	return [odd, even];
}

console.log(pickIt([1,2]))