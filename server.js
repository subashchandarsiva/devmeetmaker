const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hi Devs");
});

app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));

app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/post", require("./routes/api/post"));

app.listen(PORT, () => console.log(`App running in ${PORT}`));
