const express = require('express');
const multer = require('multer');
const app = express();
const port = 3500; // You can use any available port

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// File Upload Endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ message: 'File uploaded successfully', filename: req.file.filename });
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });