function time(distance, boatSpeed, stream){
	const speedStream = Number(stream[stream.length - 1])
	let differenceBetweenBoatSpeedAndStream = 0

	if(stream[0] === 'D') differenceBetweenBoatSpeedAndStream = boatSpeed + speedStream
	if(stream[0] === 'U') differenceBetweenBoatSpeedAndStream = boatSpeed - speedStream

	const time = distance / differenceBetweenBoatSpeedAndStream

	return Number.isInteger(time) ? time : Number(time.toFixed(2))
}

console.log(time(99, 108, 'Downstream 10'))