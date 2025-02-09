const express = require('express');
const port = 4000;
const app = express();


app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`)
})