const mongoose=require('mongoose');
const product=mongoose.model("product",new mongoose.Schema({
    subcategoryid:{type:String,require:true},
    productName:{type:String,require:true},
    price:{type:String,require:true},
    offerprice:{type:String,require:true},
    discription:{type:String,require:true},
    pic:{type:String,require:true},
}));
module.exports=product