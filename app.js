const http = require("http");
const express = require("express");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);
app.use(shopRoute);

// Error 404 middleware not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../", "views", "error.html"));
});

app.listen(3000, () =>
  console.log("W3LC0M3 M1K3 ! \nServer is running on port 3000")
);
