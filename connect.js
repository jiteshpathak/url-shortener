const mongoose = require('mongoose');

async function connectToMongoDB(url){
    return mongoose.connect(url);
    console.log("Connected to database");
}

module.exports = {connectToMongoDB};