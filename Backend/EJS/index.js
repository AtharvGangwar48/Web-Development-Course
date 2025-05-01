const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port,() => {
    console.log(`Listening to ${port}`);
})

app.get("/register", (req,res) =>{
    res.send("Starndard");
})

app.post("/register", (req,res) =>{
    console.log(req.body);
    res.send("Post");
})