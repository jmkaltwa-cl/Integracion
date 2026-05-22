import { Router } from "express";
import {
  createRegistro,
  deleteRegistro,
  getRegistro,
  getRegistros,
  updateRegistro,
} from "../controllers/registroControlador.js";

const router = Router();

router.get("/registro", getRegistros);
router.get("/registro/:id", getRegistro);
router.post("/registro", createRegistro);
router.put("/registro/:id", updateRegistro);
router.delete("/registro/:id", deleteRegistro);

export default router;
