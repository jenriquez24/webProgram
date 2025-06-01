const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.write('welcome to the server')
        return res.end()
    }

    if(req.url === '/about'){
        // for(let i = 0; i < 100000; i++){
        //      console.log(Math.random() * i)
        // }
        res.write('About to page')
        return res.end()
    }

    res.end('not found')
})

server.listen(3000)
console.log(`server to port 3000`)