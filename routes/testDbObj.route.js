const express = require("express");
const router = express.Router();
const TestDbObj = require("../models/testDbObj.model.js");                                              //import models, however if we do it the organize way we only need to import model in the controller, this is for the demo api only
const testDbObjController = require("../controllers/testDbObj.controller.js");                          //import controller object to use its exported function

//Router is for different kind of api of the same webpage, there fore is new url will need a new router
//we use router to categorize which controller function go to with api for which url
//this is where the api should be called, however the sync function aka controller should be put into another folder instead so is should be like the get api below not this one
//So each api call (get,post,put,delete) will require a new function inside the controller, 

//Demo api using routers without organize the controller
router.get("/api/testObjDb/demoGetAPI", async (req,res) => {
    try {
        const display_testObjDb = await TestDbObj.find({});
        res.status(200).json(display_testObjDb);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//-----Router API get,post,update,delete
//the default url have been defined in the index.js and it is /api/testObjDb
router.get("/", testDbObjController.getProducts);                                                       //get all api
router.get("/:id", testDbObjController.getProduct);                                                     //get 1 obj api
router.post("/", testDbObjController.createProduct);                                                    //post api : create product
router.put("/:id",testDbObjController.updateProduct);                                                   //put api : update product
router.delete("/:id",testDbObjController.deleteProduct);                                                //delete api: delete product

//export
module.exports = router;