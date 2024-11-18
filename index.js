const express = require('express')                                                          //import express after download it using npm install express
const app = express()                                                                       //create express application/object app

const mongoose = require('mongoose');                                                       //import mongoose
const TestDbObj = require('./models/testDbObj.model.js');                                   //Import model for the controller of straighforward method
const testDbObj_Route = require("./routes/testDbObj.route")                                 //import route


app.use(express.json());                                                                    //allow sending json in request
app.use(express.urlencoded({extended: false}));                                             //allow sending form-encoded format in request

//routes (use this instead of straight forward writing the api here)
app.use("/api/testObjDb", testDbObj_Route);


//send get api to return a hello message
app.get('/', function (req, res) {
    res.send('Hello Ocean Bank/Park')
});

/*This is how we write the api without organizing it into folder and using routes, and inside routes we should use controller to do this
you can remove this comment to see it clearer

//post api to input object from user body(json, form) to database
app.post('/api/testObjDb', async (req,res) =>
{
    //console.log(req.body);
    //res.send("Data received")
    //res.send(req.body);
    //sending data 
    try {
        const test_db_obj = await TestDbObj.create(req.body);                               //collect data sent from reqest of user, create function will input data to the database
        res.status(200).json(test_db_obj);                                                  //return status and display body of user request
        console.log(test_db_obj);
        console.log("request body",req.body);
    } catch (error) {
        //res.send(error);
        res.status(500).json({message: error.message});
    }
});

//----get api to return all object in the database
app.get("/api/testObjDb", async (req,res) => {
    try {
        const display_testObjDb = await TestDbObj.find({});
        res.status(200).json(display_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//----get api to return object based on id in url
app.get("/api/testObjDb/:id", async (req,res) => {
    try {
        const { id }  = req.params;                                                     //get Id from the url
        const display_testObjDb = await TestDbObj.findById(id);                         //TestDbObj.findById(id):  return object in database match id
        res.status(200).json(display_testObjDb);                                        //return and display object from database
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//----update api for testObjDb and insert in database
app.put("/api/testObjDb/:id", async (req,res) => {
    try {
        const { id }  = req.params;                                                     //get Id from the url
        const update_testObjDb = await TestDbObj.findByIdAndUpdate(id, req.body);       //TestDbObj.findByIdAndUpdate(id):  fidn object and update object in database match id
        if(!update_testObjDb){
            return res.status(404).json({message: "Product not found"})
        }
        const updated_testObjDb = await TestDbObj.findById(id);
        res.status(200).json(updated_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//----delete api from the database with id from the url
app.delete("/api/testObjDb/:id", async (req,res) => {
    try {
        const { id }  = req.params;                                                     //get Id from the url
        const delete_testObjDb = await TestDbObj.findByIdAndDelete(id);                 //TestDbObj.findById(id):  find and delete object in database match id
        if(!delete_testObjDb){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted successfully here is new database after delete"});
        const display_testObjDb = await TestDbObj.find({});                             //return all database
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

*/

//--------Connect to mongoosedb using connection string
mongoose.connect("mongodb+srv://admin:admin@simplecrud.lxbdw.mongodb.net/?retryWrites=true&w=majority&appName=SimpleCRUD")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => (
            console.log('Server is running on port 3000')
        ));
    })
    .catch(() => {
        console.log("Connection failed");
    })