const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/studentregistration",{

}).then(()=>
{
    console.log("Connection established")
}).catch((e)=>
{
    console.log("no connection");
})