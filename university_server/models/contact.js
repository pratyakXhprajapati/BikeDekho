import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }


})

const Contact = mongoose.model("Contact",contactSchema);

export default Contact;