const express = require("express");
const router = express.Router();
const Lead = require("../models/LeadTemp");

// GET /leads
router.get("/", async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

// POST /leads
router.post("/", async (req, res) => {
  const name = (req.body?.name ?? "").trim();
  const email = (req.body?.email ?? "").trim();

  if (!name || !email) {
    return res.status(400).json({ message: "name ve email zorunlu" });
  }

  const newLead = await Lead.create({ name, email });
  res.status(201).json(newLead);
});

// PUT /leads/:id
router.put("/:id", async (req, res) => {
  const { status, name, email } = req.body;

  const updated = await Lead.findByIdAndUpdate(
    req.params.id,
    {
      ...(status !== undefined ? { status } : {}),
      ...(name !== undefined ? { name } : {}),
      ...(email !== undefined ? { email } : {}),
    },
    { new: true, runValidators: true }
  );

  if (!updated) {
    return res.status(404).json({ message: "Lead bulunamadı" });
  }

  res.json({ message: "Lead güncellendi", updated });
});

// DELETE /leads/:id
router.delete("/:id", async (req, res) => {
  const deleted = await Lead.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Lead bulunamadı" });
  }

  res.json({ message: "Lead silindi", deleted });
});

module.exports = router;