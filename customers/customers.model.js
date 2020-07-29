const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const customerSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    firsLastName:{
        type: String,
        required: false
    },
    secondLastName:{
        type: String,
        required: false
    },
    email:{
        type: String,
        //unique:true,
        required: true
    },   
    phone:{
        type: String,
        required: true
    },
    phone2:{
        type: String,
        required: false
    },
    profetion:{
        type: String,
        required: false
    }
},
{
    timestamps:true
});

module.exports = customerSchema;