const mongoose = require('mongoose');

const connectDB = async (uri)=>{
    try {
        await mongoose.connect(uri)
        console.log('db connected');
        
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

module.exports = {connectDB}