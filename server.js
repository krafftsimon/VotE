const express = require('express');
const path = require('path');
const app = express();

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
