const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hi! I am post");
})

router.get("/:id",(req,res)=>{
    res.send("Hi! I am post ID");
})

router.post("/",(req,res)=>{
    res.send("Hi! I am POST post");
})

router.delete("/",(req,res)=>{
    res.send("Hi! I am DELETED post");
})

module.exports = router;