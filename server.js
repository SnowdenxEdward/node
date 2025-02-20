// http server using CommonJS
const http = require('http');
const myServer = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      res.end("I am kevin");
      break;
    default:
      res.end("404 Not Found");
      break;
  }
});

myServer.listen(3000, () => {
  console.log("Server Started : 3000 port");
});
