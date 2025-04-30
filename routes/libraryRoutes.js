const express = require('express');
const { updateLibraryPage, showAll, addLibraryForm, addLibrary, updateLibrary, deleteLibrary } = require('../controller/libraryController');
const Router = express.Router();


// Frontend Requests

// Add a new Library through form
Router.get('/Library/add',addLibraryForm);

// Update details of a Library
Router.get('/Library/update/:id',updateLibraryPage);

// Show all the Librarys
Router.get('/Library/all',showAll);



// Backend Handling

// New Library request
Router.post('/Library/add',addLibrary);

// Update Library request
Router.put('/Library/update/:id',updateLibrary);

// Delete Library request
Router.delete('/Library/delete/:id',deleteLibrary);

module.exports = Router;
