import http from 'http';
import fs from 'fs';

//create a server to handle requests to the server
const server = http.createServer((req, res) => {
    //console.log(req);

    console.log("Request details");
    console.log("---------------")
    console.log(`URL: ${req.url}`);
    console.log(`Method: ${req.method}`);

    //send a response
    if (req.url === "/" || req.url === "/hello") {
        renderHello(res);
    } else if (req.url === "/about") {
        renderAbout(res);
    }
});

const PORT = 9000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

function renderHello(res) {
    fs.readFile('./hello.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, {});
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
        }
        res.end();
    });
}

function renderAbout(res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    const developer = "Josh Archer";
    const date = new Date();

    //rudimentary templating
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hello, World!</title>
            </head>
            <body>
                <h1>About</h1>
                <p>This page built by: ${developer}</p>
                <footer>Last updated: ${date}</footer>
            </body>
        </html>`
    );
    res.end();
}