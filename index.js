const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROOT TEST (Render boş sayfa sorununu çözer)
app.get("/", (req, res) => {
  res.send("Vali backend çalışıyor 🚀");
});

app.post("/generate", (req, res) => {
  const { prefix, count } = req.body;

  if (!prefix || !count) {
    return res.status(400).json({ error: "prefix ve count gerekli" });
  }

  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(`${prefix}+${i}@gmail.com`);
  }

  res.json({ results });
});

// ⚠️ Render uyumlu PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend çalışıyor: ${PORT}`);
});
