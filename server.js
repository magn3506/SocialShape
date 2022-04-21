const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('./index.html').pipe(res)
}).listen(8000);

