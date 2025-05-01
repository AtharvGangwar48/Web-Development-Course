const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_app',
    password: 'Atharv@48'
})
/*
let createRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
  ];
}

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for(let i=0;i<100;i++){
    data.push(createRandomUser());
}
*/
app.get("/",(req,res)=>{
    let q = 'SELECT COUNT(*) FROM user';
    try{
        connection.query(q, (err, reslt) =>{
            if(err) throw err;
            let count = reslt[0]["COUNT(*)"];
            console.log(reslt);
            res.render("home.ejs", { count });

    });
    }
    catch(err){
        res.send("Some Error happened");
    }
})

app.get("/user",(req,res)=>{
    let q = 'SELECT * FROM user';
    try{
        connection.query(q, (err, users) =>{
            if(err) throw err;
            res.render("show.ejs", { users });
    });
    }
    catch(err){
        res.send("Some Error happened");
    }
})

app.get("/user/:id/edit",(req,res)=>{
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id ='${id}'`;
    try{
        connection.query(q, (err, info) =>{
            if(err) throw err;
            let data = info[0];
            res.render("edit.ejs", { data });
    });
    }
    catch(err){
        res.send("Some Error happened");
    }
})


app.listen("8080", ()=>{
    console.log("Server is running");
})