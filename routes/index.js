var express = require("express");
var router = express.Router();
const data = require("../resources/metadata.json");

router.get("/clubcard/:req_id", (req, res) => {
  let id = req.params.req_id;
  if (id < 250) {
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

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;
