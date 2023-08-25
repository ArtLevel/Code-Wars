function isPalindrome(line) {
	if(typeof line === 'number') return line.toString().split('').reverse().join('') === line.toString()
	return line.split('').reverse().join('') === line
}

console.log(isPalindrome('12321'))