const http = require('http')

const host = 'localhost';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res)=>{
    if(req.url == '/state'){
        res.writeHead(300, {'Content-Type':'text/html'})
        res.end('<html><head><body><h1>The State number is: 10</h1></body></head></html>')
        }
    else if(req.url == '/add'){
            res.writeHead(300, {'Content-Type':'text/html'})
            res.end('<html><head><body><h1>The add number is: 11</h1></body></head></html>')
            }
    else if(req.url == '/subtract'){
                res.writeHead(300, {'Content-Type':'text/html'})
                res.end('<html><head><body><h1>The subtract number is: 9</h1></body></head></html>')
            }
    else if(req.url == '/reset'){
                res.writeHead(300, {'Content-Type':'text/html'})
                res.end('<html><head><body><h1>The reset number is: 10</h1></body></head></html>')
            }
        else{
            res.writeHead(300, {'Content-Type':'text/html'})
            res.end('<html><head><body><h2>Error!!! Router not found</h2></body></head></html>')
        }
        
    });

server.listen(port, host, ()=>{
    console.log(`The server = http://${host}:${port}/`)
})