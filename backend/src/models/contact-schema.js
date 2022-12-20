const {default: mongoose, Schema, model, SchemaType} = require("mongoose");

const { ObjectId } = mongoose.Types;

const contactSchema = new Schema({
    name: {type : String, required : true},
    surname: {type : String, required : true},
    tNumber: {type : Number, required : true, unique: true},
    address: {type : String, required : true},
    bdate:{type: Date, required : true},
    
     
    
    
})

const Contact = model("Contact", contactSchema);

module.exports = Contact;