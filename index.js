// vanilla node.js hello world server
const http = require("node:http");

const server = http.createServer((req, res) => {
	res.end("Hello World\n");
});

server.listen(6767, () => {
	console.log("Server is listening on port 6767");
});
