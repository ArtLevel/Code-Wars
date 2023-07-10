function countSmileys(arr) {
	const validSmile = {
		':)': '1',
		':~)': '1',
		':-)': '1',
		';)': '1',
		';~)': '1',
		';-)': '1',

		':D': '1',
		':~D': '1',
		':-D': '1',
		';D': '1',
		';~D': '1',
		';-D': '1',
	}

	if(arr.length === 0) return 0

	let countSlimeOfArr = 0

	arr.forEach(smile => {
		if(validSmile[smile] !== undefined) countSlimeOfArr++
	})

	return countSlimeOfArr
}