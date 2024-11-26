const mongoose=require('mongoose');
const adminmodal=mongoose.model("admin",new mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}

}));
module.exports=adminmodal