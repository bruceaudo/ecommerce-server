const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectToDb = require("./config/DB.js")
const productsRoute = require("./routes/productsRoute.js")
const shoppingCartRoute = require("./routes/shoppingCartRoute.js")

const app = express();
connectToDb();

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"]
};
const port = process.env.PORT || 5500;

app.use(cors(corsOptions));

app.use("/api/v1/products", productsRoute);
app.use("/api/v1/cart", shoppingCartRoute);

app.listen(port, ()=>console.log(`Server listening on port: ${port}`));