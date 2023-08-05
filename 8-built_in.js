const os = require('os')

const user = os.userInfo()
console.log(user);

const time = os.uptime();
console.log(time);

console.log(`this is called ${os.hostname()}`);

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMen:os.freemem(),
}
console.log(currentOS);
