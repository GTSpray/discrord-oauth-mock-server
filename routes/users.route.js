const express = require("express");
const router = express.Router();
const { randomStringNumber } = require("../services/random.service");

router.get("/", (_req, res) => {
  res.render("index", { title: "Express" });
});

router.get("/@me", (_req, res) => {
  res.json({
    id: randomStringNumber(18),
    username: "randomUser" + randomStringNumber(5),
    avatar: randomStringNumber(32),
    discriminator: randomStringNumber(4),
    public_flags: 0,
    flags: 0,
    locale: "en",
    mfa_enabled: false
  });
});

router.get("/@me/guilds", (_req, res) => {
  const permissions = `1${randomStringNumber(8)}`;
  res.json([
    {
      id: randomStringNumber(18),
      name: `randomServer ${randomStringNumber(5)}`,
      icon: randomStringNumber(32),
      owner: false,
      permissions: parseInt(permissions, 10),
      features: ["ANIMATED_ICON", "INVITE_SPLASH"],
      permissions_new: permissions
    },
    {
      id: "581630635346247630",
      name: `randomServer ${randomStringNumber(5)}`,
      icon: randomStringNumber(32),
      owner: false,
      permissions: parseInt(permissions, 10),
      features: ["ANIMATED_ICON", "INVITE_SPLASH"],
      permissions_new: permissions
    }
  ]);
});

module.exports = router;
