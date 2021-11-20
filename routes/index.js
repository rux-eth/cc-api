const express = require("express");
const router = express.Router();
const data = require("../resources/metadata.json");
const abi = require("../resources/ClubCardsABI.json");
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/df78fbf24831482086628af2e81e4b58"
);
const contract = new web3.eth.Contract(
  abi,
  "0x8780BFfc3AaC7eBc40194BCD70D20b7D4E6a92b6"
);
let port = process.env.PORT || 3000;
var currentSupply = 0;

const checkSupply = () => {
  contract.methods
    .totalSupply()
    .call()
    .then((res) => {
      currentSupply = parseInt(res);
    });
};

const interval = setInterval(checkSupply, 10000);

const checkExists = (token) => {
  if (token > currentSupply) {
    return false;
  } else {
    return true;
  }
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

router.get("/clubcard/:req_id", (req, res) => {
  let id = req.params.req_id;
  if (id < 1 || id > 520 || isNaN(id)) {
    res.sendStatus(400);
  }
  if (checkExists(id)) {
    res.status(200).json(data[id - 1]);
  } else {
    res.status(200).json({
      animation_url: `https://clubcards-web.s3.filebase.com/assets/pack${getRandomInt(
        1,
        3
      )}.gif`,
      description:
        "Thank you for participating in the public sale! Wen reveal? Soon! CC 👊",
    });
  }
});

router.get("/", (req, res) => {
  res.send("uuuuhhhh... well this is awkward");
});

module.exports = router;
