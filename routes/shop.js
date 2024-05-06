const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../helpers/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1742183796.
  res.render("shop", {prods: products, pageTitle: "Shop", path: "/"});
});

module.exports = router;
