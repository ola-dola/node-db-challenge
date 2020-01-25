const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api', ProjectRouter);

server.use((req, res) => {
    res.json("I'm alive and nervous!");
})

module.exports = server;