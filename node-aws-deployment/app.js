// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // CPU-intensive operation for testing auto-scaling
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.random() * Math.random();
  }
  
  res.send(`<h1>Node.js Auto-Scaling Demo</h1>
            <p>Server processed request. Result: ${result}</p>
            <p>Hostname: ${require('os').hostname()}</p>
            <p>Date: ${new Date().toISOString()}</p>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
