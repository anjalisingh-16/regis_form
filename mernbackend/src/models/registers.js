const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    },
    countrycode:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    
    email:{
        type:String,
         required:true,
         unique:true
    },
    address:{
        type:String,
        required:true,

    },
    course:{
        type:String,
        required:true
    }
   
    
})
const Register=new mongoose.model("Register",studentSchema);
module.exports=Register;