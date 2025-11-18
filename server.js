const express = require("express");
const router = require("./api/tarifler-router");
const server = express();

server.use(express.json());
server.use("/tarifler", router);
module.exports = server;
