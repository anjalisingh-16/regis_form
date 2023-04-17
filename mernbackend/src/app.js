const express=require("express");
const path=require("path");
const hbs=require("hbs");
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials")
// console.log(template_path);
require("./db/conn");
const Register=require("./models/registers");
const app=express();
const port=process.env.PORT ||3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);
app.get("/",(req,resp)=>
{
    resp.render("index");
}); 
app.post("/index",async(req,resp)=>{
   try{
 const registerStudent=new Register({
 firstname:req.body.firstname,
 lastname:req.body.lastname,
 gender:req.body.gender,
 countrycode:req.body.countrycode,
 phone:req.body.phone,
 email:req.body.email,
 address:req.body.address,
 course:req.body.course,
})
console.log(req.body.email);
console.log(req.body.firstname);
console.log(req.body.lastname);
console.log(req.body.gender);
console.log(req.body.countrycode);
console.log(req.body.phone);
console.log(req.body.email);
    const registered =await registerStudent.save();
    resp.status(201).render("index");
 
}catch(error){
    resp.status(400).send(error);
   }
})
app.listen(port,()=>
{
 console.log(`server is running at ${port}`);
});