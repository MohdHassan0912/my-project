const product=require("../models/product");
 const multer=require("multer");
 const express=require("express");
 const productrouter=express.Router();
const path = require("path");


//To SAVE Pic (Multer Code)
const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {// cb is just a callback funcation name (any variale you can choose)
      cb(null, "propic/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: mystorage });
  
  // Product API to SAVE data in Database
  productrouter.post("/", upload.single("pro_pic"), async (req, res) => {//pro_pic is wrapper in which u will send the image name
    try {
      let re = new product({
        subcategoryid: req.body.subcategoryid,
        productName: req.body.productName,
        price: req.body.price,
        offerprice: req.body.offerprice,
        discription: req.body.discription,
        pic: req.file.filename,
      });
      if (await re.save()) {
        res.json({ msg: "Record Saved" });
      } else {
        res.json({ msg: "Technical Error" });
      }
    } catch (e) {
      res.json({ msg: e.massage });
    }
  });
  
  //Product API to GET all Id Data
  productrouter.get("/", async (req, res) => {
    const data = await product.find();
    res.json(data);
  });
  
  //Product API to GET data of a particular Id
  productrouter.get("/:mid", async (req, res) => {
    const data = await product.find({ _id: req.params.mid });
    res.json(data);
  });
  
  productrouter.patch("/", async (req, res) => {
    const data = await product.find({ subcategoryid: req.body.subcatid });
    res.json(data);
  });
  
  // productrouter.patch("/", async (req, res) => {
  //   if(req.body.pname!==""){
  //   var exp = new RegExp(req.body.pname,"i");
  //   const data = await product.find({ productName:exp });
  //   res.json(data);
  // }
  // else{
  //   res.json([]);
  // }
  // });
  
  //Product API to DELETE a record
  productrouter.delete("/", async (req, res) => {
    const data = await product.findOneAndDelete({ _id: req.body.mid });
    res.json({ msg: "Records delete" });
  });
  
  //Product API to UPDATE a Record
  productrouter.put("/", async (req, res) => {
    try {
      const data = await product.findOneAndUpdate(
        { _id: req.body.mid }, //mid is comimg from frontend (doubtful)
        {
          subcategoryid: req.body.subcategoryid,
          productName: req.body.productName,
          price: req.body.price,
          offerprice: req.body.offerprice,
          discription: req.body.discription,
          pic: req.body.pic,
        }
      );
      res.json({ msg: "Records update" });
    } catch (e) {
      res.json({ msg: e.massage });
    }
  });

  module.exports=productrouter;
  