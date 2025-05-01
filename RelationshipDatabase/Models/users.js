const mogoose = require("mongoose");

main()
    .then(()=>{console.log("Connected to MongoDB")})
    .catch(err => console.log(err));

async function main(){
    await mogoose.connect('mongodb://127.0.0.1:27017/relation');
}

const userSchema =  new mogoose.Schema({
    username: String,
    addresses: [
        {
            _id:false,
            location: String,
            city: String
        }
    ]
})

const User = mogoose.model("User",userSchema);

const addUsers = async() => {
    let user1 = new User({
        username:"Anomysh",
        addresses: [{
            location:"kaizi Bakery",
            city:"Delhi"
        }]
    })
    user1.addresses.push({location:"P35 Wallstreet", city:"London"});
    let result = await user1.save();
    console.log(result);
} 

addUsers()