const express = require("express");
const supabase = require("./supabase");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// macOS uses port 5000 for AirPlay Receiver; use another port (e.g. 5050) in dev.
const PORT = Number(process.env.PORT) || 5050;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

//  POST /connection
app.post("/connection", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are required" });
    }

    const { data, error } = await supabase
      .schema("portfolio")
      .from("connections")
      .insert({ name, email, message });

    if (error) {
      console.error("Supabase Error:", error);
      return res.status(500).json({ error: error.message ?? error });
    }
    res.json(data ?? {});
  } catch (err) {
    console.error("POST /connection failed:", err);
    res.status(500).json({ error: err instanceof Error ? err.message : "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));