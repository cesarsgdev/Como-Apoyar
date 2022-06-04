const express = require("express");
const router = express.Router();

// API Endpoint to get the list of all available donation centers => GET /api/centers
router.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: `This is the list of all available donation centers...` });
});

// API Endpoint to get the info about a specific donation center => GET /api/centers/:id
router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `This is the donation center with ID ${req.params.id}` });
});

// API Endpoint to create a new donation center => POST /api/centers
router.post("/", (req, res) => {
  res.status(200).json({ message: `Donation center created...` });
});

// API Endpoint to update a specific donation center => PUT /api/centers/:id
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({
      message: `Donation center with ID ${req.params.id} has been updated`,
    });
});

// API Endpoint to delete a donation center => DELETE /api/centers/:id
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Donation center with ID ${req.params.id} has been deleted...`,
  });
});

module.exports = router;
