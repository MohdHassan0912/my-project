const mongoose=require('mongoose');
const Category=mongoose.model("Category",new mongoose.Schema({
    categoryname:{type:String,require:true},
    categorypic:{type:String,require:true}
}));
module.exports=Category