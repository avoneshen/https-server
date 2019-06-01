const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();
const privateKey = fs.readFileSync("private/key.key", "utf8");
const certificate = fs.readFileSync("private/server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = https.createServer(credentials, app);

// 443 is the default for https but may not be allowed...
server.listen(8443);
