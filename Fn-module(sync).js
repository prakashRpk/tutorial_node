const { readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const sec = readFileSync('./content/sec.txt','utf8')

console.log(first,sec)
writeFileSync('./content/margeText.txt',`result :${first},${sec}`,{flag:'a'})