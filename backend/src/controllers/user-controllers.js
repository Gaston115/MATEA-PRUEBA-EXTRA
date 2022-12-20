const HttpError = require("../models/http-error");
require("dotenv").config();
const Contact = require("../models/contact-schema");
const { encrypt } = require("../models/address-Encrypt");


const createcontact = async (req, res, next) => {
  const {
    name,
    surname,
    tNumber,
    address,
    bdate,
   
  } = req.body;
  const addressHash = await encrypt(address);
  try {
    const contact = new Contact({
    name,
    surname,
    tNumber,
    address: addressHash,
    bdate,
  
    });

    await contact.save();
    res.status(201).json("Se creo el Contacto Exitosamente");
  } catch (error) {
    return next(error);
  }
};
const viewcontact = async (req, res, next) => {
  try {
    const contact = await Contact.find({});
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = {createcontact, viewcontact };
