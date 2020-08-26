const express = require("express");
const router = express.Router();
const { randomStringNumber } = require("../services/random.service");

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/oauth2/token", (_req, res) => {
  const access_token = randomStringNumber(10);
  res.json({
    access_token,
    token_type: "Bearer",
    expires_in: 1735686000,
    refresh_token: randomStringNumber(10),
    scope: "identify,guilds"
  });
});

module.exports = router;
