const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hi! I am user");
})

router.get("/:id",(req,res)=>{
    res.send("Hi! I am user ID");
})

router.post("/",(req,res)=>{
    res.send("Hi! I am POST user");
})

router.delete("/",(req,res)=>{
    res.send("Hi! I am DELETED user");
})

module.exports = router;