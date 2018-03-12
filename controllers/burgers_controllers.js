// All code below based on Class Activity-CatsApp
const express = require("express");
const burgers = require("../models/burgers.js");
const router = express.Router();


router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  burgers.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({id: result.insertID});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.updateOne({
    devoured: true
  }, condition, function(result) {
    res.status(200).end();
  });
});


module.exports = router;
