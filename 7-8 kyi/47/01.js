const grabDoll = dolls => {
	const bag = []
	let placeInTheBag = 0

	for(let i = 0; i < dolls.length; i++) {
		if(placeInTheBag === 3) break
		if(dolls[i] !== 'Hello Kitty' && dolls[i] !== 'Barbie doll') continue
		placeInTheBag++
		bag.push(dolls[i])
	}

	return bag
}

console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]))