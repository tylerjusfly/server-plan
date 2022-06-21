const express = require("express");
const { CalculateServers } = require("../controllers/serviceplanner");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("welcome To hositech");
});

router.post("/", CalculateServers);

module.exports = router;
