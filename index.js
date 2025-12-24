const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend çalışıyor: http://localhost:${PORT}`);
});
