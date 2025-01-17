const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  startupname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});

const FormData = mongoose.model('FormData', formDataSchema);
module.exports = FormData;
