const mongoose=require('mongoose');
const signupmodal=mongoose.model("signup",new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}

}));
module.exports=signupmodal