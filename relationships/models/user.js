const mongoose=require("mongoose");

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const userSchema=new mongoose.Schema({
    username: String,
    addresses: [
        {
            _id:false,
            location: String,
            city: String
        }
    ]
});

const User=mongoose.model("User", userSchema);

const addUser=async()=>{
    let user1=new User({
        username:"Vineet",
        addresses:[
            {
                location:"NITW",
                city:"Warangal"
            }
        ]
    });
    user1.addresses.push({location:"Koti", city:"Hyderabad"});
    let result=await user1.save();
    console.log(result);
};

addUser();