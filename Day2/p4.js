const http = require('http');
const server = http.createServer((req, res) => {
    let data = [
        {
            "id": 1,
            "username": "admin",
            "password": "1334"
        },
        {
            "id": 2,
            "username": "user",
            "password": "5678"
        }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
});