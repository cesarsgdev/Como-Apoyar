const express = require("express");
const router = express.Router();
const Centers = require("../models/centersModel");

// API Endpoint to get the list of all available donation centers => GET /api/centers
router.get("/", async (req, res) => {
  try {
    const centers = await Centers.find();
    if (centers[0]) {
      res.status(200).json(centers);
    } else {
      throw Error("There is no donation centers available");
    }
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

// API Endpoint to get the info about a specific donation center => GET /api/centers/:id
router.get("/:id", async (req, res) => {
  try {
    const center = await Centers.findById(req.params.id, "-__v");
    if (center) {
      res.status(200).json(center);
    } else {
      throw Error(`No donation center available with ID ${req.params.id}`);
    }
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

// API Endpoint to create a new donation center => POST /api/centers
router.post("/", async (req, res) => {
  try {
    const center = await new Centers(req.body);
    await center.save();
    res.status(200).json(center);
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

// API Endpoint to update a specific donation center => PUT /api/centers/:id
router.put("/:id", async (req, res) => {
  try {
    const center = await Centers.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (center) {
      res.status(200).json({ status: "updated", data: center });
    }
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

// API Endpoint to delete a donation center => DELETE /api/centers/:id
router.delete("/:id", async (req, res) => {
  try {
    const center = await Centers.findByIdAndDelete(req.params.id);
    if (center) {
      res.status(200).json({ status: "deleted", data: center });
    } else {
      throw Error(`No donation center available with ID ${req.params.id}`);
    }
  } catch (e) {
    res.status(400).json({ error: `${e.message}` });
  }
});

module.exports = router;
