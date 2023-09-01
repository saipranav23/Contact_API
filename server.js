const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./MiddleWare/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
});

