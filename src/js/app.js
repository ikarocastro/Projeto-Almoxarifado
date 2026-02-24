const express = require("express");
const cors = require("cors");
const materialRoutes = require("./routes/materialRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/materiais", materialRoutes);

module.exports = app;