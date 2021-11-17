var express = require("express");
var router = express.Router();

const data = require("../resources/metadata.json");
const abi = require("../resources/ClubCardsABI.json");
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/664fba9ff7364292afcb5373c6e9cc44"
);
const contract = new web3.eth.Contract(
  abi,
  "0x8780BFfc3AaC7eBc40194BCD70D20b7D4E6a92b6"
);

var currentSupply = 0;

const checkSupply = () => {
  contract.methods
    .totalSupply()
    .call()
    .then((res) => {
      currentSupply = parseInt(res);
    });
};

router.get("/clubcard/:req_id", (req, res) => {
  let id = req.params.req_id;
  res.status(200).send("" + id);
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;
