import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

/* DATABASE CONNECTION */

connectDB();

/* START SERVER */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
