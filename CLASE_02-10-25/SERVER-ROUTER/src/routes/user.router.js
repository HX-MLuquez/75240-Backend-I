const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const users = [];
  res.status(200).json({ success: true, users });
});

module.exports = router;