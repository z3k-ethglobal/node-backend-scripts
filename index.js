const express = require('express');
const multer = require('multer');
const app = express();
const lighthouse = require('@lighthouse-web3/sdk');
const { lh } = require('./lhscript');

const port = 8080; // You can use any available port

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, 'file.txt');
    // cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });


async function asyncLH () {
    console.log("asyncLH")
    // const uploadResponse = new Promise((resolve) => {
    //     resolve(lighthouse.upload(
    //         '/Users/aryan/4zzz.pdb',
    //         'efe51041.77131449b309469f98eed12c6f319f0f'
    //         ));
    // });
    const uploadResponse = await lighthouse.upload(
        '/Users/aryan/4zzz.pdb',
        'efe51041.77131449b309469f98eed12c6f319f0f'
        );
    console.log("uploadResponse")
    console.log(uploadResponse);
    return uploadResponse;
}

// File Upload Endpoint
app.post('/upload', upload.single('file'), (req, res) => {
if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
}

// call lighthouse.js
try {
    asyncLH();
} catch(error) {
        console.error(error);
        process.exitCode = 1;
}
res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});