const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
   res.statusCode = 200
   res.setHeader("Content-Type", "text/html")
   switch (req.url) {
      case "/" :
         res.write("<h1 style='color: red;'>This is homepage</h1>")
         res.write("<a href='/login'>Login</a> <br>")
         res.write("<a href='/api'>API</a>")
         res.end()
         break
      case "/api" :
         res.write('{"university" : "Greenwich", "address" : "Pham Van Bach - Ha Noi"}')
         res.end()
         break
      case "/login" :
         res.write("<form>")
         res.write("Username: <input type=text required> <br>")
         res.write("Password: <input type=password required> <br>")
         res.write("<button>Login</button>")
         res.write("</form>")
         res.end()
         break
      default: 
         res.write("<h1 style='background-color: yellow;'>Page not found !</h1>")
         res.end()
         break
   }
})

server.listen(port, () => {
   console.log("Server is running at http://localhost:" + port)
})


