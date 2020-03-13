const path = require('path');
const express = require('express');
const app = new express();
const expressEdge = require('edge.js');
app.use(express.static('public'));
app.use(expressEdge.engine);

// Routes, nav bar links
app.get('/', (req, res) => {
  
    res.render('index');
  });