const http = require('http'); // Node std library
const colors = require('colors');

// req is the request info and res is the response object.
http.createServer( (req, res) => {
  // Log the request in the console.
  console.log(`Serving request: ${req.method} ${req.url}`.green);

  res.writeHeader(200, {'Content-Type': 'text/plain'});
  res.end(Math.random().toString());
}).listen(1337);


console.log(`server running at http://localhost:1337/`.yellow);
