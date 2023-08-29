const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './videos'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.vishesh}`); 
  },
});

const upload = multer({ storage });


app.use(express.static(path.join(__dirname, 'videos')));


app.post('/upload', upload.single('video'), (req, res) => {
  res.json({ message: 'Video uploaded successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
