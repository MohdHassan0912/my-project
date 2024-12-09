const express = require("express"); //allows to use express
const app = express(); // storing express in app
const mongoose = require("mongoose"); // used for database

const multer = require("multer"); //used to store images in frontend
const cors = require("cors"); //give access to send data from one port to another
const path = require("path"); // used in multer (to rename the same named file in images)

var nodemailer = require('nodemailer');

app.use(express.json()); //allows to receive data from frontend in json format
app.use(cors()); //allows to send data from one port to another
app.use(express.static("propic")); // to access backend folder in frontend
app.use(express.static("catpic")); // to access backend folder in frontend
app.use(express.static("subcatpic")); // to access backend folder in frontend

// importing models
const subcategory = require("./models/subcategory");
const category = require("./models/Category");
const product = require("./models/product");
const signupmodal = require("./models/signupmodal");
const cartmodel = require("./models/cartmodal");
const adminmodal = require("./models/admin");
const ordermodel = require("./models/ordermodel");
const detailsmodel = require("./models/orderdetailsmodel");
const emailmodal=require("./models/emailmodel");


// importing routers 
const categoryrouter = require("./routers/categoryrouter");
const subcategoryrouter = require("./routers/subcategoryrouter");
const productrouter = require("./routers/productrouter");
const singuprouter = require("./routers/signuprouter");

//Conecting to the database
const con = mongoose.connect("mongodb://127.0.0.1:27017/Categorydb");
con.then(() => {
  console.log("connection Done");
});
con.catch(() => {
  console.log("connection Failed");
});

// ===================== APIs ======================

// ======Subcategory APIs=======

// Subcategory API (SAVE)

//To SAVE Pic (Multer Code)
app.use('/subcategory',subcategoryrouter);

//======Category APIs=======

//Category API for SAVE data in Database

//To SAVE Pic (Multer Code)
app.use('/category',categoryrouter);

//========== Product APIs =============

app.use('/product',productrouter);

// signup api
app.use('/signup',singuprouter);

app.patch("/sproduct", async (req, res) => {
  
  if(req.body.pname!==""){
  var exp = new RegExp(req.body.pname,"i");
  const data = await product.find({ productName:exp });
  res.json(data);
}
else{
  res.json([]);
}
});

//Cart Api

app.post("/cart", async (req, res) => {
  const re1 = await cartmodel.find({
    productid: req.body.productid,
    username: req.body.username,
  });
  if (re1.length > 0) {
    var qty = parseInt(re1[0].quantity) + 1 + "";
    var cid = re1[0]._id;
    const re = await cartmodel.findOneAndUpdate(
      { _id: cid },
      { quantity: qty }
    );
  } else {
    const re = new cartmodel({
      productid: req.body.productid,
      productName: req.body.productname,
      price: req.body.price,
      username: req.body.username,
      pic: req.body.pic,
      quantity: "1",
    });
    await re.save();
  }
  res.json({ msg: "Item Added to Cart" });
});

app.get("/cart/:uid", async (req, res) => {
  const re = await cartmodel.find({ username: req.params.uid });
  res.json(re);
});

app.delete("/cart", async (req, res) => {
  const re = await cartmodel.findOneAndDelete({ _id: req.body.cid });
  res.json({ msg: "Item Delete" });
});

app.put("/cart", async (req, res) => {
  var qty = "";
  if (req.body.op === "plus") {
    qty = parseInt(req.body.qty) + 1 + "";
  } else {
    qty = parseInt(req.body.qty) - 1 + "";
  }
  if (req.body.op === "minus" && req.body.qty == "1") {
    const re = await cartmodel.findOneAndDelete({ _id: req.body.cid });
    res.json({ msg: "Item Delete" });
  } else {
    const re = await cartmodel.findOneAndUpdate(
      { _id: req.body.cid },
      { quantity: qty }
    );
    res.json({ msg: "Item Updated" });
  }
});

//Admin api

app.post("/admin", async (req, res) => {
  const re = new adminmodal({
    username: req.body.name,
    password: req.body.password,
  });
  await re.save();
  res.json({ msg: "Account created" });
});

app.patch("/admin", async (req, res) => {
  const re = await adminmodal.find({
    username: req.body.name,
    password: req.body.password,
  });
  if (re.length > 0) {
    res.json({ msg: "Valid Login" });
  } else {
    res.json({ msg: "Invalid Login" });
  }
});

//order api

app.post("/order", async (req, res) => {
  var dt = new Date();
  var odt = dt.getFullYear() +"-" + (dt.getMonth() + 1) + "-" + dt.getDate() + " " + dt.getHours() + ":" +dt.getMinutes();
  const re = new ordermodel({
    username: req.body.uname,
    name: req.body.name,
    mobile: req.body.mobile,
    address: req.body.address,
    city: req.body.city,
    zip: req.body.zip,
    state: req.body.state,
    amount: req.body.amount,
    orderdate: odt,
    status: "Pending",
  });
  await re.save();
  const re1 = await cartmodel.find({ username: req.body.uname });
  for (var i = 0; i < re1.length; i++) {
    var re3 = new detailsmodel({
      orderno: re._id,
      productname: re1[i].productName,
      price: re1[i].price,
      productpic: re1[i].pic,
      quantity: re1[i].quantity,
    });
    await re3.save();
  }
  const re4 = await cartmodel.deleteMany({ username: req.body.uname });
  res.json({ msg: "Order Placed" });
});

// app.get("/orderdetails", async (req, res) => {
//   const re = await ordermodel.find();
//   res.json(re);
// });

app.get("/order", async (req, res) => {
  const re = await ordermodel.find();
  res.json(re);
});

app.patch("/orderdetails", async (req, res) => {
  const re = await detailsmodel.find({orderno:req.body.ordno});
  res.json(re);
});

app.patch("/order", async (req, res) => {
  const re = await ordermodel.find({username:req.body.uname});
  res.json(re);
});

// email api for practice of nodemailer

app.post("/email", async (req, res) => {

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mh5927196@gmail.com',
    pass: '@mohdhassan1234@'
  }
});

var mailOptions = {
  from: 'mh5927196@gmail.com',
  to: req.body.toemail,
  subject: 'Testing Email',
  text: req.body.message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    res.json({msg:error});
  } else {
    res.json({msg:'Email sent: ' + info.response});
  }
});

});



//Server running on PORT 9000
app.listen(9000, () => {
  console.log("server Started");
});
