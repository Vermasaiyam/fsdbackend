const http = require('http');
let Users = [];
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === '/setdata' && req.method === 'POST') {
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', () => {
            let data = JSON.parse(body);
            console.log(data);
            Users.push(data);
            res.end(JSON.stringify({ message: 'Data received' }));
        });
    }
    else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(9000, (err) => {
    if (err)
        console.log("Error starting server", err);
    else
        console.log("server started at port 9000");
})