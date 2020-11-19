#!/usr/bin/env node
require('dotenv').config();
const server = require('./src/Helpers/server');
const Worker = require("./src/Workers");
const os = require('os');
const cluster = require('cluster');
const app = {};
/**
 * Method to initialize the server.
 */
app.init = () => {
   const cpuLength = os.cpus().length;
   if (cluster.isMaster) {
      const worker = new Worker();
      worker.init();
      for (let i = 0; i < cpuLength; i++) {
         cluster.fork();
      }
   } else {
      server.init();
   }
};
//Starting the App.
app.init();