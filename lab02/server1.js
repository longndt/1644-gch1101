//1. khai báo module 'http' để chạy web
const http = require('http')
//2. khai báo web server/hosting (optional)
const host = 'localhost'
//3. khai báo server port
const port = 5000
//4. khởi tạo server
const server = http.createServer((request,response) => {
   response.write("<h1>Programming is so funny</h1>")
   response.end()
})
//5. chạy server bằng cách listen port
server.listen(port, () => {
   console.log("Web server is running at http://" + host + ':' + port)
})