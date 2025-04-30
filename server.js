const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');
const libraryRoutes = require('./routes/libraryRoutes');
const DBConnect = require('./database/DBConnect');

// Connect to database
DBConnect();

// Method override library to use in ejs for sending overriden requests like (put,patch,delete etc)
app.use(methodOverride('_method'));

//
app.use(express.urlencoded({extended:true}));

// Connect the static folder for using CSS
app.use(express.static(path.join(__dirname,'static')));

// Use ejs template lang for view engine
app.set('view engine','ejs');

// Set the views to views folder
app.set('views','./views');

// All the user routes
app.use(libraryRoutes);

// Home page
app.get('/',(req,res)=>{
    res.render('home.ejs');
})


// SERVER AT 3000
app.listen(4000,()=>{
    console.log("Server is running at port 4000");
})