const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = ("/api",(req,res, next)=>{
    let { token }= req.query;
    if (token === "grantaccess"){
        next();
    }
    throw new ExpressError(401,"DENIED YOUR ACCESS!!");
})

app.get("/api", checkToken ,(req,res)=>{
    res.send("Data");
})

app.get("/",(req,res)=>{
    res.send("Working Fine");
})

app.get("/random",(req,res)=>{
    res.send("Sucessful");
})

app.use((err,req,res, next)=>{
    let {status, message} = err;
    res.status(status).send(message);
})

//app.use((req, res, next)=>{
//    console.log("Hi! I am middleware");
//    next();
//})


app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ERROR OCCURED");
})

app.get("/err",(req,res)=>{
    throwing = error ;
})

app.listen(8080, ()=>{
    console.log("Listenting at port 8080");
})