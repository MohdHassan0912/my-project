const mongoose=require('mongoose');
const cartmodel=mongoose.model("cart",new mongoose.Schema({
    productid:{type:String,require:true},
    productName:{type:String,require:true},
    price:{type:String,require:true},
    username:{type:String,require:true},
    pic:{type:String,require:true},
    quantity:{type:String,require:true},

}));
module.exports=cartmodel