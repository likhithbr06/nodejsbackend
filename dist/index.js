//app.js

const express = require('express');
const app = express();
const PORT = 3000;
let count = 0;
app.get('/', (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
app.get('/app/oi', (req, res) => {
  count++;
  console.log(`aya koi `);
  console.log(`you are the ${count} person visiting here`);
  res.status(200);
  res.send(`you are the ${count} person visiting here`);
});
app.listen(PORT, error => {
  if (!error) {
    console.log("Server is Successfully Running,and App is listening on port " + PORT);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});