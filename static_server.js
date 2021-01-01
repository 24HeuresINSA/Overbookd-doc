const express = require('express');
const serveStatic = require('serve-static');

const staticBasePath = './build';
 
const app = express();
 
app.use('/docs', serveStatic(staticBasePath, {'index': ['index.html']}));
app.use(function(req, res, next) {
    res.status(404).sendFile('./build/404.html', { root: __dirname});
});
app.listen(3001);