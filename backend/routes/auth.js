const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Dummy logic for now
  if (email === "test@example.com" && password === "password") {
    return res.json({ message: "Login successful" });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
