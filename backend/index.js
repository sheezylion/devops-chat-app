const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(express.json());

app.use("/auth", authRoutes); // prefix

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
