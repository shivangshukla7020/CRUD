const LibraryModel = require('../database/model/Library');

// Add a new Library (frontend)
function addLibraryForm(req, res){
    res.render('newLibraryForm');
}

// Add a new Library (backend)
async function addLibrary(req, res){
    await LibraryModel.create(req.body);
    res.redirect('/Library/all');
}

// Show all Library
async function showAll(req,res){
    try{
        const Libraries = await LibraryModel.find({});
        res.render('showAllLibraries.ejs',{Libraries : Libraries});
    }
    catch(err){
        console.log(err);
    }
    
}

// Update Library page (on clicking the update button)
async function updateLibraryPage(req, res){
    const {id} = req.params;
    const library = LibraryModel.findById(id);
    res.render('updateLibraryForm',{library : library});
}


// Update request handle
async function updateLibrary(req, res){
    const {id} = req.params;
    await LibraryModel.findByIdAndUpdate(id,req.body);
    res.redirect('/Library/all')

}


// Delete request handle
async function deleteLibrary(req, res){
    const {id} = req.params;
    await LibraryModel.findByIdAndDelete(id);
    res.redirect('/Library/all');
}

module.exports = {addLibraryForm, addLibrary, showAll, updateLibraryPage, updateLibrary, deleteLibrary};