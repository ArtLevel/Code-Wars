const ensureQuestion = (s) =>   s[s.length - 1] === '?' ? s : [...s.split(''), '?'].join('')

console.log(ensureQuestion('No'))