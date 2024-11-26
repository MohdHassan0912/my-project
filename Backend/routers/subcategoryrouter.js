const subcategory=require("../models/subcategory");
 const multer=require("multer");
 const express=require("express");
 const subcategoryrouter=express.Router();
const path = require("path");



const mysubcatstorage = multer.diskStorage({
    destination: (req, file, cb) => {// cb is just a callback funcation name (any variale you can choose)
      cb(null, "subcatpic/"); //catpic is a folder in which pic will save
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const uploadsubcatpic = multer({ storage: mysubcatstorage });
  
  subcategoryrouter.post("/",uploadsubcatpic.single("subcat_pic"),
    async (req, res) => {
      try {
        const r = new subcategory({
          categoryid: req.body.categoryid,
          subcategoryname: req.body.subcategoryname,
          subcategorypic: req.file.filename,
        }); //first is from Schema (API) and second is from Frontend
        if (await r.save()) {
          res.json({ msg: "Records Saved" });
        } else {
          res.json({ msg: "Technical Error" });
        }
        // const data = await r.save();
        // res.json({ msg: "Records Saved" });
      } catch (e) {
        res.json({ msg: e.massage });
      }
    }
  );
  
  subcategoryrouter.patch("/", async (req, res) => {
    const data = await subcategory.find({ categoryid: req.body.categoryid });
    res.json(data);
  });
  
  // Subcategory API to GET all records
  subcategoryrouter.get("/", async (req, res) => {
    const data = await subcategory.find();
    res.json(data);
  });
  
  // Subcategory API to GET particular Id record
  subcategoryrouter.get("/:id", async (req, res) => {
    const data = await subcategory.find({ _id: req.params.id });
    res.json(data);
  });
  
  // Subcategory API to GET filtered category Id
  subcategoryrouter.get("/:id", async (req, res) => {
    const data = await subcategory.find({ categoryid: req.params.id });
    res.json(data);
  });
  
  // Subcategory API to DELETE record
  subcategoryrouter.delete("/", async (req, res) => {
    const data = await subcategory.findOneAndDelete({ _id: req.body.satid });
    res.json(data);
  });
  
  // Subcategory API to UPDATE record
  subcategoryrouter.put("/", async (req, res) => {
    try {
      const update = await subcategory.findOneAndUpdate(
        { _id: req.body.satid }, // satid is here a wraper in which id is coming from frontend
        {
          categoryid: req.body.categoryid,
          subcategoryname: req.body.subcategoryname,
        }
      );
      res.json({ msg: "Record update" });
    } catch {
      e;
      res.json({ msg: e.massage });
    }
  });

  module. exports= subcategoryrouter;