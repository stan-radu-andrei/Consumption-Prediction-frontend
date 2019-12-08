const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', function(req, res) {
    res.sendfile('index.html');
    })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))