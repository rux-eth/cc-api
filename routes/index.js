var express = require("express");
var router = express.Router();
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/664fba9ff7364292afcb5373c6e9cc44"
);
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;
