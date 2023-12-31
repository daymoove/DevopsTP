import * as http from 'http';
import * as os from 'os';

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {

        const headers = req.headers;
        console.log(os.hostname());


        res.setHeader('Content-Type', 'application/json');


        res.end(JSON.stringify(headers));
    } else {

        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT, 10) : 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});