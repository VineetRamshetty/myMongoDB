const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
}).catch((err) => {
    console.log(err)
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const testChats=[
    {
        from:"Vineet",
        to:"Vishal",
        msg:"Happy birthday ra!!",
        created_at: new Date()
    },
    {
        from:"Vishal",
        to:"Vineet",
        msg:"Thank you anna",
        created_at: new Date()
    },
    {
        from:"Vineet",
        to:"Vishal",
        msg:"Sare malli, enjoy",
        created_at: new Date()
    },
    {
        from:"Vishal",
        to:"Vineet",
        msg:"okay anna, bye",
        created_at: new Date()
    },
    {
        from:"Ma",
        to:"Vineet",
        msg:"tinnava?",
        created_at: new Date()
    },
    {
        from:"Vineet",
        to:"Ma",
        msg:"tinaledu",
        created_at: new Date()
    },
    {
        from:"Ma",
        to:"Pa",
        msg:"Vineet tinaledu anta",
        created_at: new Date()
    },
    {
        from:"Pa",
        to:"Vineet",
        msg:"Vineet, velli tinnu first",
        created_at: new Date()
    },
    {
        from:"Vineet",
        to:"Pa",
        msg:"sare",
        created_at: new Date()
    },
    {
        from:"Atha",
        to:"Vineet",
        msg:"Money kaavale?",
        created_at: new Date()
    },
    {
        from:"Vineet",
        to:"Atha",
        msg:"oddu atha",
        created_at: new Date()
    },
    {
        from:"Atha",
        to:"Vishal",
        msg:"anna ki money vesina ani chepu",
        created_at: new Date()
    },
    {
        from:"Vishal",
        to:"Atha",
        msg:"sare atha",
        created_at: new Date()
    },
    {
        from:"Vishal",
        to:"Vineet",
        msg:"atha money vesindi anta anna",
        created_at:new Date()
    },
    {
        from:"Vineet",
        to:"Vishal",
        msg:"Uff sare",
        created_at:new Date()
    }
];

Chat.insertMany(testChats);

mongoose.connection.close();