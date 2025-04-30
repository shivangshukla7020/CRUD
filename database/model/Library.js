const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    libraryName: {
        type : String, 
        trim : true,
        required : true
    },
    location: {
        type : String, 
        required : true
    },
    noOfBooks: {
        type : Number, 
        required : true
    },
    establishedYear: {
        type : Number, 
        required : true
    },
    hasDigitalSection: {
        type : String, 
        required : true
    },
    openingHours: {
        type : String, 
        required : true
    },
    contactEmail: {
        type : String, 
        trim : true,
        required : true
    }
    
})

const LibraryModel = mongoose.model('Library',LibrarySchema);

module.exports = LibraryModel;