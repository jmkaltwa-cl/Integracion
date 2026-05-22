import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = 4000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
  });
};

startServer();
