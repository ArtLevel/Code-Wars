const nato = (word) => {
	return word.split('').map(el => {
		switch (el.toLowerCase()) {
			case 'a': return 'Alpha'
			case 'w': return 'Whiskey'
			case 'p': return 'Papa'
			case 'u': return 'Uniform'
			case 'q': return 'Quebec'
			case 'd': return 'Delta'
			case 'f': return 'Foxtrot'
			case 'j': return 'Juliett'
			case 'm': return 'Mike'
			case 's': return 'Sierra'
			case 'g': return 'Golf'
			case 'z': return 'Zulu'
			case 'y': return 'Yankee'
			case 'r': return 'Romeo'
			case 'b': return 'Bravo'
			case 'c': return 'Charlie'
			case 'h': return 'Hotel'
			case 'i': return 'India'
			case 'n': return 'November'
			case 'l': return 'Lima'
			case 'e': return 'Echo'
		}
	}).join(' ')
}