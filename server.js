const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/authRoutes.js");
const adminProductsRouter = require("./routes/admin/productsRoutes.js");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/product-routes.js");
const shopCartRouter = require("./routes/shop/cart-routes.js");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/ feature-routes.js");

//db
mongoose.connect('mongodb+srv://shreyaschauhan40:shreyaschauhan40@cluster0.jv7ka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log('Error connecting to MongoDB:', error));


const app = express();
const PORT = process.env.PORT || 5000;


const allowedOrigins = ["https://mern-ecomm-pink.vercel.app"];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    // Allow the specific origins
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // This is crucial for allowing cookies/auth headers
  optionsSuccessStatus: 200 // Optional: Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products',adminProductsRouter);
app.use('/api/admin/order',adminOrderRouter);

app.use('/api/shop/products',shopProductsRouter);
app.use('/api/shop/cart',shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);


app.listen(PORT, () => console.log(`Server is now running on PORT ${PORT}`));

