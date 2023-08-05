const http = require('http');
const server =http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('here to our home page')
}
    res.end(`
        <h1>oopss</h1>
        <p>we can't to find any page</p>
        <a href="/">back to home</a>
    `)
})
server.listen(5000)