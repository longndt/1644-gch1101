//1. khai báo module 'http' để chạy web
const http = require('http')
//2. khai báo web server/hosting (optional)
const host = 'localhost'
//3. khai báo server port
const port = 3000
//4. khởi tạo server
const server = http.createServer((request,response) => {
   response.write("<h1 style='color: red; font-style: italic; text-decoration: underline; text-align: center;'>Cloud Computing - GCH1101</h1>")
   response.write("<h2 style='text-align: center'>PRACTICE MAKES PERFECT</h2><h3>new line here</h3>line 1 <br> line 2")
   response.end("<h1>THE END</h1>")
})
//5. chạy server bằng cách listen port
server.listen(port, () => {
   console.log("Web server is running at http://" + host + ':' + port)
   //console.log("web server is running at http://localhost:3000")
})