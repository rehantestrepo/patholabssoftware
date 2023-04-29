const mongoose = require('mongoose');

const pathogensDataSchema = new mongoose.Schema({
    pathogensName: String,
    infected: Boolean
})

const labTests = new mongoose.Schema({ 
    name: String,
    pathogensData: [pathogensDataSchema],
    image: String
 });

 module.exports = new mongoose.model("LabTest", labTests)