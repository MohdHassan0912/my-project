const category = require("../models/Category");
const multer = require("multer");
const express = require("express");
const categoryrouter = express.Router();
const path = require("path");

const mycatstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb is just a callback funcation name (any variale you can choose)
    cb(null, "catpic/"); //catpic is a folder in which pic will save
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadcatpic = multer({ storage: mycatstorage });

categoryrouter.post("/", uploadcatpic.single("cat_pic"), async (req, res) => {
  //cat_pic is a wrapper here
  try {
    let re = new category({
      categoryname: req.body.categoryname,
      categorypic: req.file.filename,
    });

    if (await re.save()) {
      res.json({ msg: "Record saved" });
    } else {
      res.json({ msg: "Technical Error" });
    }
  } 
  catch (e) {
    res.json({ msg: e.massage });
  }
});

// Category for GET all Id Data
categoryrouter.get("/", async (req, res) => {
  const data = await category.find();
  res.json(data);
});

// Category for GET data of a particular Id
categoryrouter.get("/:id", async (req, res) => {
  const data = await category.find({ _id: req.params.id });
  res.json(data);
});

// Category for DELETE  data from Database
categoryrouter.delete("/", async (req, res) => {
  const data = await category.findOneAndDelete({ _id: req.body.catid });
  res.json({ msg: "Records Saved" });
});

// Category for UPDATE data
categoryrouter.put("/", async (req, res) => {
  try {
    const update = await category.findOneAndUpdate(
      { _id: req.body.catid },
      { categoryname: req.body.categoryname }
    );
    res.json({ msg: "Record update" });
  } catch (e) {
    res.json({ msg: e.massage });
  }
});

module.exports = categoryrouter;
