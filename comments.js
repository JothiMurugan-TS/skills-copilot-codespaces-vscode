// Create web server
const express = require('express');
const app = express();

// Create a route to handle POST requests
app.post('/comments', (req, res) => {
  res.send('You sent a POST request');
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});