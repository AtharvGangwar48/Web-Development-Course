const mongoose = require('mongoose');

main()
   .then((res)=>{
    console.log("Connected");
   })
   .catch((err)=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);

const user1 = new User({
    name: "Adam", 
    age: 19, 
    email:"mailtoadam@outlook.com"
});
const user2 = new User({
    name: "Eve", 
    age: 18, 
    email:"mailtoEVE@yahoo.com"
});

User.insertMany([
    {name: "Manu",age: 20, email:"ManuMail@outlook.com"},
    {name: "Eva", age: 18, email:"mailtoEVA@yahoo.com"},
    {name: "Harry", age: 19, email:"harryHERE@gmail.com"}
]).then((res) =>{
    console.log(res);
});

user1.save();
user2.save();


User.findOneAndUpdate({name:"EVA"}, {age: 18})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("error");
})



