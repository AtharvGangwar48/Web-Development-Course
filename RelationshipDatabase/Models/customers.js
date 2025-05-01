const mogoose = require("mongoose");

main()
    .then(()=>{console.log("Connected to MongoDB")})
    .catch(err => console.log(err));

async function main(){
    await mogoose.connect('mongodb://127.0.0.1:27017/relation');
}

const orderSchema =  new mogoose.Schema({
    item: String,
    price: Number
})

const customerSchema = new mogoose.Schema({
    name: String,
    orders:[
        {
        type: mogoose.Schema.Types.ObjectId,
        ref:"Order"
        }
    ]
});

const Order = mogoose.model("Order",orderSchema);

const Customer = mogoose.model("Customer",customerSchema);


const addCustomers = async () => {
    let Cust1 = await new Customer({
        name: "Customer1"
    });
    let order1 = await Order.findOne({}).populate("orders");
    Cust1.orders.push(order1);
    Cust1.orders.push(order2);
    Cust1.orders.push(order3);

    let Res = await Cust1.save();
    console.log(Res);
}

addCustomers();

//const addOrders = async () => {
//    let res =  await Order.insertMany([
//        {item: "Shirt", price: 500},
//        {item: "Trousers", price: 1000},
//        {item: "Jeans", price: 1500}
//    ])
//    console.log(res);
//}

//addOrders();