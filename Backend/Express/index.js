const express = require("express");
const app = express();

//console.log(app);

let port = 8080;
app.listen(port, () =>{
  console.log(`The app is listing port ${port}`);
})

/*app.use(( req, res ) => {
    console.log("Request received...");
  res.send("Welcome to Home Page");
})*/

app.get("/", ( req, res ) => {
    res.send("You are on the root path");
})

app.get("/apple", ( req, res ) => {
    res.send("This is the apple path...");
})

app.get ( "/mango", ( req, res ) => {
    res.send("This is the mango path...");
})

//app.get ( "/:username", ( req, res ) => {
//  let {username, id} = req.params;
//  let htmlstr = `<h1>This is the ${username} path...</h1>`
//  res.send(htmlstr);
//})

app.get("/search", ( req, res ) => {
  console.log(req.query);
  res.send("Not Found");
})
