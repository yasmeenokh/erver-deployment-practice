'use strict';

require('dotenv').config();
const serverFile = require('./server.js');
const PORT = process.env.PORT || 3030;

serverFile.start(PORT);