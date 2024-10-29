// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 7071;

app.get('/api/health', (req, res) => {
  console.log('Health check');
  res.send( 'UP' );    
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});