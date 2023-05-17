const http = require('http')
//const port = 3000
const server = http.createServer((req, res) => {
   //res.statusCode = 200  //HTTP-OK
   //res.setHeader("Content-Type","text/html")
   res.end("<h1>Welcome to Greenwich Vietnam !</h1>")
})
server.listen(3000)