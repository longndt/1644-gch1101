//1. khai báo module http  
const http = require('http')
//2. khai báo server host (optional)
const host = 'localhost'  //127.0.0.1
//3. khai báo server port
const port = 3000
//4. tạo web server
const server = http.createServer((request, respond) => {
   respond.write("<h1 style='font-style: italic'>Hello Greenwich students ! </h1>")
   respond.end("<h1 style='color: red'>Set up NodeJS web server succeed !</h1>")
})
//5. chạy server
server.listen(port, () => {
   console.log('Server is running at http://' + host + ":" + port)
})
