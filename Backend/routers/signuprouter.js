const signupmodal=require("../models/signupmodal");
 const multer=require("multer");
 const express=require("express");
 const signuprouter=express.Router();
 const bcrypt=require('bcryptjs');


 signuprouter.post("/", async (req, res) => {
  const psw=await bcrypt.hash(req.body.password,12);
    const re = new signupmodal({
      name: req.body.name,
      email: req.body.email,
      password: psw,
    });
    await re.save();
    res.json({ msg: "Account created" });
  });
  
  signuprouter.patch("/", async (req, res) => {
    const re = await signupmodal.find({
      email: req.body.email,
      // password: req.body.password,
    });
    if (re.length > 0) {
      if(await bcrypt.compare(req.body.password,re[0].password))
      {
      res.json({ msg: "valid Login" });
      }
      else{
        res.json({ msg: "Invalid Login" });
      }
    } else {
      res.json({ msg: "Invalid Login" });
    }
  });
  
  signuprouter.get("/", async (req, res) => {
    const re = await signupmodal.find();
    res.json(re);
  });

  signuprouter.post("/changepsw", async (req, res) => {


    const npsw=await bcrypt.hash(req.body.newpsw,12);

    const re = await signupmodal.find({
      email: req.body.email,
    });
    if (re.length > 0) {
      if(await bcrypt.compare(req.body.password,re[0].password))
      {
          const re = await signupmodal.findOneAndUpdate({email:req.body.email},{password:npsw});   
          res.json({msg:"password changed"});
      }
      else{
        res.json({ msg: "Your are not a valid user to change passwordsss" });
      }
    } else {
      res.json({ msg: "Your are not a valid user to change password" });
    }
  });

  module.exports=signuprouter;
  