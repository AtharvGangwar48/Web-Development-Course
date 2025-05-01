const express = require("express");
const app = express();
//const users = require("./routes/user.js");
//const post = require("./routes/post.js")
const ejsMate = require("ejs-mate");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
//const cookieParser = require("cookie-parser");
const sessionOptions = {
    secret:"mySecret", 
    resave: false, 
    saveUninitialized:true
};

app.use(session(sessionOptions));
app.use(flash());
//app.use(cookieParser("Secret string"));

app.engine("ejs",ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/test",(req,res)=>{
    res.send("Test Successful");
})

app.get("/register",(req,res)=>{
    let {name = "Unknown user"} = req.query;
    req.session.name = name;
    req.flash("sucess","user registered succesfully");
    res.redirect("/greet");
})

app.get("/greet",(req,res)=>{
    res.render("page.ejs", {name: req.session.name, msg: req.flash("sucess")});
})

app.get("/reqCount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count = 1;
    }
    res.send(`The session count is: ${req.session.count} times`);
})
//app.get("/getCookies",(req,res)=>{
//    res.cookie("Greet","Namaste");
//    res.cookie("From","INDIA");
//    res.send("Sended you 2 cookie");
//})

//app.get("/",(req,res)=>{
//    console.dir(req.cookies);
//    res.send("HI! I am root");
//})

//app.get("/greet",(req,res)=>{
//    let{name = "Guest"} = req.cookies; 
//    res.send(`HI! ${name}`);
//})

//app.get("/signedCookies",(req,res)=>{
//    res.cookie("made-in","India", {signed: true});
//    res.send("Sended a signed cookie to you");
//})

//app.get("/verify",(req,res)=>{
//    console.log(req.signedCookies);
//    res.send("Verified! Original cookies has been sended to terminal console");
//})

app.listen(3000,()=>{
    console.log("Hi! it Working fine");
})