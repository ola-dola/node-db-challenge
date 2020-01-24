const express = require("express");

const Helpers = require("./projects-model");

const router = express.Router();

router.get("/resources", (req, res) => {
  Helpers.find("resources")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to retrieve at the moment");
    });
});

router.post("/resources", (req, res) => {
  const body = req.body;

  Helpers.insert("resources", body)
    .then(data => {
      if (data) {
        res.status(200).json("New resource added");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to add new resource.");
    });
});

module.exports = router;
