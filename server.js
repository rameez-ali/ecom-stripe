const express = require("express");
const errorHandler = require("./middlewares/errorHandler")
const cors = require("cors")
const dotenv = require("dotenv").config();

require('./config/dbConnection')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/checkout", require("./routes/stripeRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
});