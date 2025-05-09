const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.send("API running");
});

// Start the server, binding to all interfaces (0.0.0.0)
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
