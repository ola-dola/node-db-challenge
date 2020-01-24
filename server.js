const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.use((req, res) => {
    res.json("I'm alive and nervous!");
})

module.exports = server;