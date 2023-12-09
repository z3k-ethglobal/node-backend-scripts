// index.js
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000; // You can use any available port

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});