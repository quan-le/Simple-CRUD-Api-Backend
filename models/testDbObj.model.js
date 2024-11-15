//We create model of our object first before using it to create database, kinda similar to implementation class

const mongoose = require('mongoose');
//Create Schema object
const testDbObjSchema = new mongoose.Schema(
    {
        //this is where we define each object/table's column in database
        name: {
            type: String,
            required: [true, "Please enter product Name"],
        },

        quantity: {
            type: Number,
            required: [true, "Please enter product quantity"],
            default: 0,
        },

        price: {
            type: Number,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: true,                                                         //Create 2 more field, created at and updated at for the table
    }
)

const testDbObj = mongoose.model("testDbObj", testDbObjSchema);                 //model(table_name, table_schema)
module.exports = testDbObj;