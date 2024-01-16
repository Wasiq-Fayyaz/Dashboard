const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://Wasiq:Dashboard_123@cluster101.65u6cti.mongodb.net/?retryWrites=true&w=majority"


app.listen(5000, () => {
  console.log("Server listening....");
});

mongoose.connect(mongoUrl).then(() => {
  console.log("Connected to Cluster101 car_dashboard");
}).catch((err) => {
  console.log(err);
})



//creating a basic rest api
app.post("/post", async (req, res) => {
  console.log(req.body); // *** checkout the data entered by user
  const {first_name, last_name} = req.body; // *** destructure and store it in a variabel

  // *** best practice of catching errors using try catch
  try {
    first_name === "Wasiq" || last_name === "Fayyaz" ? res.send({ status: "ok" }) : res.send({ status: "404" });
  } catch (error) {
    res.send({ status: "Opps! Something went wrong try again" });
  }
});
