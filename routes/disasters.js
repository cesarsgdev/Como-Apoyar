const express = require("express");
const router = express.Router();

// API Endpoint to get the list of all disasters available => GET /api/disasters
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `This is the list of all available disasters...` });
});

// API Endpoint to get the information of a specific disaster => GET /api/disasters/:id
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `This is the info of disaster with ID ${req.params.id}` });
});

// API Endpoint to create a new disaster => POST /api/disasters
router.post("/", (req, res) => {
  res.status(200).json({ message: `New disaster created...` });
});

// API Endpoint to update a specific disaster => PUT /api/disasters/:id
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Disaster with ID ${req.params.id} has been updated...` });
});

// API Endpoint to delete a specific disaster => DELETE /api/disasters/:id

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Disaster with ID ${req.params.id} has been deleted...` });
});

module.exports = router;
