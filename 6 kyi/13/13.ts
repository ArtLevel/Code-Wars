export function wave(str: string): Array<string>{
	const mexicanWaveArr: string[] = []

	for(let i = 0; i < str.length; i++) {
		const str2Arr = str.split('')
		if(str2Arr[i] !== ' ') {
			str2Arr[i] = str2Arr[i].toUpperCase()
			const finalStr = str2Arr.join('')

			mexicanWaveArr.push(finalStr)
		}
	}

	return mexicanWaveArr
}

