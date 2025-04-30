const mongoose = require('mongoose');

async function DBConnect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/');
        console.log("Database Connected")
    }
    catch{
        console.log("Failed to connect database")
    }
}

module.exports = DBConnect;