const {readFileSync,writeFileSync} =require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);

writeFileSync('./content/third.txt',`here is the result of 1st and 2nd txt : ${first},${second},`,{flag:'a'})