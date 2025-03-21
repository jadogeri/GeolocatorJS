// backend/server.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});