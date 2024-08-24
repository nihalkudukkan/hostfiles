const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

// Serve files from the 'public/files' directory
// app.use('/files', express.static(path.join(__dirname, 'files'))); //not downloading but static html

//this one downloads file
app.get('/files/:name', (req, res)=> {
    const name = req.params['name']

    res.download(path.join(__dirname, 'files', name), (err)=>{
        console.log(err)
    });
})

// API to get the list of files
app.get('/api/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'files');
  
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan files!');
        }
        res.json(files);
    });
});

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`);
});