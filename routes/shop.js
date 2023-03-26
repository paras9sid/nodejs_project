const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.sendFile("/views/shop.html"); or   res.sendFile("./views/shop.html"); will not work
  //method to add path
  // __dirname points to path in the same foler t, so to go up add one more  '../' like this to go up on level
  res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //dont add / in path anywhere as join is used
});

module.exports = router;
