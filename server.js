const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://JohnDoe:Johnny@cluster999.77u7cti.mongodb.net/?retryWrites=true&w=majority"
app.use(cors())
app.listen(5000, () => {
  console.log("Server listening....");
});

mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to Cluster101 car_dashboard");
}).catch((err) => {
  console.log(err);
})



//creating a basic rest api
// app.post("/post", async (req, res) => {
//   console.log(req.body); // *** checkout the data entered by user
//   const {first_name, last_name} = req.body; // *** destructure and store it in a variabel

//   // *** best practice of catching errors using try catch
//   try {
//     first_name === "Wasiq" || last_name === "Fayyaz" ? res.send({ status: "ok" }) : res.send({ status: "404" });
//   } catch (error) {
//     res.send({ status: "Opps! Something went wrong try again" });
//   }
// });

require('./userRegistration')
const User = mongoose.model("userRegistration")
const newUser = mongoose.model("newUser")

app.post('/register' ,async(req, res) => {
  const {fullname, emailaddress, password} = req.body;
  try {
    await User.create("userRegistration",{
      fullname,
      emailaddress,
      password,
    });
    res.send({status:"OK"})
  } catch (error) {
    res.send({status:"404" + error})
  }
  
})
