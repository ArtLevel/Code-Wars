export function noSpace(str: string): string {
	return str.split('').map(symbol => symbol === ' ' ? '' : symbol).join('')
}

