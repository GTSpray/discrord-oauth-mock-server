const express = require("express");
const router = express.Router();
const { randomStringNumber } = require("../services/random.service");

router.get("/", (req, res) => {
  if (req.query.redirect_url) {
    res.redirect(`${req.query.redirect_url}?code=${randomStringNumber(10)}`);
  }
});

module.exports = router;
