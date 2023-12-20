String.prototype.toJadenCase = function () {
	return this.split(' ').map(word => {
		const newWord = word.split('')
		newWord[0] = newWord[0].toUpperCase()
		return newWord.join('')
	}).join(' ')
};

console.log('Hello my name is Artemiy'.toJadenCase())