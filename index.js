const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("This is the placeholder API endpoint");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
