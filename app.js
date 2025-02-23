const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(res.url == '/'){
        res.end('welcome to index page')
    }
    if(res.url === '/about'){res.end('welcome to about page')}
    res.end(`<h1>oops !</h1>
        <a href="/">back to home page <a>`)
})
server.listen(5000)