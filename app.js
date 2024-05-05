const http = require("http");
const express = require("express");
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const path = require("path");
const bodyParser = require("body-parser");
const rootDir = require("./helpers/path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', 'views')


// Error 404 middleware not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
});

app.listen(3000, () =>
  console.log("W3LC0M3 M1K3 ! \nServer is running on port 3000")
);