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

router.get("/projects", (req, res) => {
  Helpers.find("projects")
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to retrieve at the moment");
    });
});

router.post("/projects", (req, res) => {
  const body = req.body;

  Helpers.insert("projects", body)
    .then(data => {
      if (data) {
        res.status(200).json("New project added");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to add new resource.");
    });
});

router.get("/projects/:id/tasks", (req, res) => {
  const id = req.params.id;

  Helpers.findTasks(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to retrieve at the moment");
    });
});

router.post("/projects/:id/tasks", (req, res) => {
  const body = req.body;

  Helpers.insert("tasks", body)
    .then(data => {
      if (data) {
        res.status(200).json("New task added successfully");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json("Unable to add new task at the moment");
    });
});

module.exports = router;
