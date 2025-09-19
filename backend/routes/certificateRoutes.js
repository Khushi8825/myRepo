const express = require("express");
const { saveCertificate } = require("../models/certificateModel");
const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const cert = await saveCertificate(req.body);
    res.json({ msg: "✅ Certificate saved successfully", data: cert });
  } catch (err) {
    console.error("❌ Error saving certificate:", err.message);
    res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
