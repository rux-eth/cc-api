var express = require("express");
var router = express.Router();

router.get("/clubcard/:req_id", (req, res) => {});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
