const mongoose = require('mongoose');

const pathogensDataSchema = new mongoose.Schema({
    pathogensName: String,
    infected: Boolean,
    image: String
})

const labTests = new mongoose.Schema({ 
    name: String,
    pathogensData: [pathogensDataSchema],
 });

 module.exports = new mongoose.model("LabTest", labTests)