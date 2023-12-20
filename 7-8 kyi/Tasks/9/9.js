/*
	Return the number (count) of vowels in the given string.

	We will consider a, e, i, o, u as vowels for this Kata (but not y).

	The input string will only consist of lower case letters and/or spaces.
 */

function getCount(str) {
	const vowels = {
		'a': 'a',
		'e': 'e',
		'i': 'i',
		'o': 'o',
		'u': 'u',
	}

	return str.split('').filter(symbol => symbol === vowels[symbol]).join('').length
}