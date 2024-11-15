const TestDbObj = require("../models/testDbObj.model");

//get api to return all products
const getProducts = async (req,res) => {
    try {
        const display_testObjDb = await TestDbObj.find({});
        res.status(200).json(display_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get api to return product based on id in the url
const getProduct = async (req,res) => {
    try {
        const { id }  = req.params;                                                     //get Id from the url
        const display_testObjDb = await TestDbObj.findById(id);                         //TestDbObj.findById(id):  return object in database match id
        res.status(200).json(display_testObjDb);                                        //return and display object from database
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req,res) =>
    {
        //console.log(req.body);
        //res.send("Data received")
        //res.send(req.body);
        //sending data 
        try {
            const test_db_obj = await TestDbObj.create(req.body);                                   //collect data sent from reqest of user, create function will input data to the database
            res.status(200).json(test_db_obj);                                                      //return status and display body of user request
            console.log(test_db_obj);
            console.log("request body",req.body);
        } catch (error) {
            //res.send(error);
            res.status(500).json({message: error.message});
        }
    };

const updateProduct = async (req,res) => {
    try {
        const { id }  = req.params;                                                                 //get Id from the url
        const update_testObjDb = await TestDbObj.findByIdAndUpdate(id, req.body);                   //TestDbObj.findByIdAndUpdate(id):  fidn object and update object in database match id
        if(!update_testObjDb){
            return res.status(404).json({message: "Product not found"})
        }
        const updated_testObjDb = await TestDbObj.findById(id);
        res.status(200).json(updated_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const deleteProduct =  async (req,res) => {
    try {
        const { id }  = req.params;                                                             //get Id from the url
        const update_testObjDb = await TestDbObj.findByIdAndUpdate(id, req.body);               //TestDbObj.findByIdAndUpdate(id):  fidn object and update object in database match id
        if(!update_testObjDb){
            return res.status(404).json({message: "Product not found"})
        }
        const updated_testObjDb = await TestDbObj.findById(id);
        res.status(200).json(updated_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

};