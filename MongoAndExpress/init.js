const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then( () => {
    console.log("Connection Successful");
  })
  .catch((err) => {console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Chatme');
}  


let allChats = [
    {
        from: "SENDER1",
        to: "RECIEVER1",
        msg:"Hello! Welcome",
        created_At:  new Date()
    },
    {
        from: "SENDER2",
        to: "RECIEVER2",
        msg:"Hi! How are you doing",
        created_At:  new Date()
    },
    {
        from: "SENDER3",
        to: "RECIEVER3",
        msg:"Are you fine",
        created_At:  new Date()
    },
    {
        from: "SENDER4",
        to: "RECIEVER4",
        msg:"I am good",
        created_At:  new Date()
    },
    {
        from: "SENDER5",
        to: "RECIEVER5",
        msg:"I watched a movie Today",
        created_At:  new Date()
    },
    {
        from: "SENDER6",
        to: "RECIEVER6",
        msg:"I am Happy",
        created_At:  new Date()
    },
    {
        from: "SENDER7",
        to: "RECIEVER7",
        msg:"Finished my Work early",
        created_At:  new Date()
    },
    {
        from: "SENDER8",
        to: "RECIEVER8",
        msg:"Happy Coding",
        created_At:  new Date()
    }
];

Chat.insertMany(allChats);
