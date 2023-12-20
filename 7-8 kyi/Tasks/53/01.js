const solve = (s) => [...s]
	.map(el => Number(el) || el === '0' ? el : ' ')
	.join('')
	.split(' ')
	.filter(el => el !== '')
	.map(Number)
	.sort((a, b) => b - a)[0]

console.log(solve('2rc0u9gj6mt813c0vr6lizc7gsy5zaazpz5a43fs5t6q201yxkzpaj8a0g3hi2vfujdrl0e104lfgt7mirp3e6k02kvzf6rp7yy2k9bfuo4yinp3tiwl45wn4pipnc5pcvjj79wbr3rij8ey9m77ipadw7pik1lceq6foejtvqye7j5d3jlpbr4g3jxksunomb99ex058lfwafu13g9e8vb9xgwzqftxybytxmh5cxw8bhkhsfj6abshp5pg49miggrcbspesfrupjr5jluu25ov4odzf75wf79fqt5d7xqd0cu7v7xyko1q48qts2exfql6yhjg9esuo560i9ornjbeq5afje85fzsps1t0ma43qmm367b119yte5cv0h6ltaivmthdyr227j7gljtqou5qo2ca6owav1io0gl0jf10117bp'))