const mongoose=require('mongoose');
const subCategory=mongoose.model("subCategory",new mongoose.Schema({
    categoryid:{type:String,require:true},
    subcategoryname:{type:String,require:true},
    subcategorypic:{type:String,require:true}

}));
module.exports=subCategory