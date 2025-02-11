const mongoose = require('mongoose');

const connectMongo = async() => {
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/project2', {
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
        console.log('MongoDB Connected');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
}

module.exports = connectMongo;