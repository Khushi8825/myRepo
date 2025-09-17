// const express = require("express");
// const { signup, login } = require("../controllers/authController");

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);

// module.exports = router;
const express = require("express");
const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware"); // your existing middleware

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// ✅ Add verify route
router.get("/verify", authMiddleware, (req, res) => {
  res.json(req.user); // returns decoded user info from token
});

module.exports = router;

