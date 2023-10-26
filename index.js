const express = require("express");
const { dbConnection } = require("./config/database/db.js");
const empRoute = require("./routes/empRoute.js");

const app = express();
const port = 3000;

dbConnection();
app.use(express.json());
app.use("/api/v1", empRoute);

app.get("/", (req, res) => {
  res.json({ success: true, msg: "welcome" });
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
