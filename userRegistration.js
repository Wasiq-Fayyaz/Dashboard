const mongoose = require("mongoose");
const userRegistrationDetails = new mongoose.Schema(
  {
    fullname: String,                  /**** Structure of Data *****/
    emailaddress: String,
    password: String,
  },
  { collection: "userRegistration" }    /**** Collection to be stored *****/
);

mongoose.model("userRegistration", userRegistrationDetails);    /**** Model creation using collection and schema*****/







const newUser = new mongoose.Schema({
  fname,
  lname,
  ph,
},{
  collection:"newUser"
})

const NewUser = mongoose.model("NewUser",newUser)
module.exports = NewUser
