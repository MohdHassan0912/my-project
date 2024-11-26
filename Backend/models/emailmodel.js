const mongoose=require('mongoose');
const emailmodal=mongoose.model("email",new mongoose.Schema({
    sender:{type:String,require:true},
    receiver:{type:String,require:true},
    massage:{type:String,require:true}

}));
module.exports=emailmodal