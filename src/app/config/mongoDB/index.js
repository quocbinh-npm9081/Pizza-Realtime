const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/pizza';
async function connectDB() {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("CONNECT DB SUCCESS !!!");
    } catch (error) {
        console.log("CONNECT DB FALSE !!!");
        console.log(error);
    }

}

module.exports = { connectDB };