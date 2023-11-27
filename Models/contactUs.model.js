const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactUs_Schema = new Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    require:true
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required:true
  }
})



const contactUsModel = mongoose.model("Contact Us Forms", contactUs_Schema)
module.exports = contactUsModel
