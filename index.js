const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const centers = require("./routes/centers");
const disasters = require("./routes/disasters");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/centers", centers);
app.use("/api/disasters", disasters);

app.get("/", (req, res) => {
  res.status(200).send("This is the placeholder API endpoint");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
