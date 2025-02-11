const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


app.use(cors());
app.use(express.json());

connectDB();


app.use('/api', authRoutes)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})