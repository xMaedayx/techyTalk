const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // specify the folder where the uploaded file will be stored
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' + file.originalname; // generate a unique file name
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file-input'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  // do something with the uploaded file here, such as storing it in a database or processing it
  res.send('File uploaded successfully.');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001.');
});