const mongoose=require("mongoose");

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const orderSchema=new mongoose.Schema({
    item:String,
    price:Number
});

const customerSchema=new mongoose.Schema({
    name:String,
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

const Order=mongoose.model("Order", orderSchema);
const Customer=mongoose.model("Customer", customerSchema);

const addOrders=async()=>{
    let result=await Order.insertMany([
        {
            item:"Samosa",
            price:15
        },
        {
            item:"chips",
            price:20
        },
        {
            item:"Chocolate",
            price:35
        }
    ]);

    console.log(result);
};

// addOrders()

const addCustomer=async()=>{
    let cust1=new Customer({
        name:"Vineet"
    });
    let order1=await Order.findOne({item:"Samosa"});
    let order2=await Order.findOne({item:"Chocolate"});
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let result=await cust1.save();
    console.log(result);
};

// addCustomer();

const findCustomer=async()=>{
    let result=await Customer.find({});
    console.log(result);
};

// findCustomer();

const findCustomerPopulate=async()=>{
    let result=await Customer.find({}).populate("orders");
    console.log(result[0]);
};

findCustomerPopulate();