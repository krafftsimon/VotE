const express = require('express');
const path = require('path');
const app = express();


app.get('*.js', (req, res, next) => {
  console.log(req.url.substring(0,15))
  if (req.url.substring(0,15) === '/static/js/main') {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    next();
  }
})

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Return other routes to React index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = '4500';

app.set('port', port);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
