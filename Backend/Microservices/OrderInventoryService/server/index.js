#!/usr/bin/.env node
require('dotenv').config();
const server = require('./src/Helpers/server');
const os = require('os');
const cluster = require('cluster');
const app = {};
/**
 * Method to initialize the server.
 */
app.init = () => {
   const cpuLength = os.cpus().length;
   if (cluster.isMaster) {
      for (let i = 0; i < cpuLength; i++) {
         cluster.fork();
      }
   } else {
      server.init();
   }
};
//Starting the App.
app.init();