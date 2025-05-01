const mogoose = require("mongoose");

main()
    .then(()=>{console.log("Connected to MongoDB")})
    .catch(err => console.log(err));

async function main(){
    await mogoose.connect('mongodb://127.0.0.1:27017/relation');
}

const userSchema =  new mogoose.Schema({
    username: String,
    email: String
});

const postSchema = new mogoose.Schema({
    content: String,
    likes: Number,
    user: {
        type: mogoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const User = mogoose.model("User",userSchema);
const Post = mogoose.model("Post",postSchema);

const addData = async () => {
    let user1 = new User({
        username:"Account1",
        email:"account01@email.com"
    })
    let post1 = new Post({
        content: "I am the First User",
        likes: 7
    });

    post1.user = user1;
    await user1.save();
    await post1.save();
} 

addData();
