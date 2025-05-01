const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));

app.get("/ig/:username",(req,res)=>{
    let{ username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("instagram.ejs", { data } );
})

app.get("/",(req,res)=>{
    res.render("home.ejs");
} )

app.get("/rolldice",(req,res)=>{
    res.render("Rolldice.ejs");
})


app.listen(port, () =>{
    console.log(`Listening on Port ${port}`);
}
)