/*
	Write a simple parser that will parse and run Deadfish.

	Deadfish has 4 commands, each 1 character long:

	    i increments the value (initially 0)
	    d decrements the value
	    s squares the value
	    o outputs the value into the return array

	Invalid characters should be ignored.

	parse("iiisdoso") => [8, 64]
*/

export function parse(data: string): number[] {
	const comandsArr = data.split('')

	let currentValue = 0
	const finalArr: number[] = []

	comandsArr.forEach(comand => {
		if(comand === 'i') currentValue += 1
		if(comand === 'd') currentValue -= 1
		if(comand === 's') currentValue = Math.pow(currentValue, 2)
		if(comand === 'o') finalArr.push(currentValue)
		console.log(currentValue)
	})

	return finalArr
}