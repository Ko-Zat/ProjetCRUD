const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "project.CRUD";
mongoClient.connect(url, function(err, client){
    console.log("Connecté à MongoDB");
    const mongoDatabase = client.db(dbName);
    client.close();
});

const http = require("node:http");
const hostName = "127.0.0.1";
const port = 8081;
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen( port, hostName, () => {
    console.log("Server running at http://" + hostName + ":" + port + "/");
});