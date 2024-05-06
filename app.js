const http = require("http");
const express = require("express");
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const path = require("path");
const bodyParser = require("body-parser");
const rootDir = require("./helpers/path");
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoute);
app.use(express.static(path.join(__dirname, "public")));

/*  app.set('view engine', 'pug'); */
app.set("view engine", "ejs");
app.set("views", "views");

// Error 404 middleware not found
app.use((req, res, next) => {
  res.status(404).render("error", { pageTitle: "Error", path: '' });
});

//app.listen(3000, () =>
//console.log("W3LC0M3 M1K3 ! \nServer is running on port 3000")
//);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
