const MonoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "monProjetMongo";
MonoClient.connect(url, function(err, client){
    console.log("Connecté à MongoDB");
    const db = client.db(dbName);
    client.close();
});
