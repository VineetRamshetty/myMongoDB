const mongoose=require("mongoose");

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const accountSchema=new mongoose.Schema({
    username:String,
    email:String
});
const postSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    account:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Account"
    }
});

const Account=mongoose.model("Account", accountSchema);
const Post=mongoose.model("Post", postSchema);

let addData=async()=>{
    let acc1=new Account({
        username:"Vineet",
        email:"vineet@xyz.com"
    });
    let post1=new Post({
        content:"Nameste Duniya",
        likes:7
    });
    post1.account=acc1;
    console.log(await acc1.save());
    console.log(await post1.save());
};

// addData();

let addMoreData=async()=>{
    let acc1=await Account.findOne({username:"Vineet"});
    let post2=new Post({
        content:"Bye Bye",
        likes:2
    });
    post2.account=acc1;
    console.log(await post2.save());
};

// addMoreData();

const findPost=async()=>{
    console.log(await Post.find({}));
};

// findPost();

const findPostPopulate=async()=>{
    let result=await Post.find({}).populate("account", "username");
    console.log(result);
};

findPostPopulate();