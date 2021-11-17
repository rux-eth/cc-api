var express = require("express");
var router = express.Router();

router.get("/clubcard/:req_id", (req, res) => {
  let id = req.params.req_id;
  res.status(200).send("" + id);
});

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;
