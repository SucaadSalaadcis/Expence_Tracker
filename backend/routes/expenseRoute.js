import express from "express";
import { expenceController } from "../controllers/expenseController.js";

const router = express.Router();


router.get("/expences", expenceController.allExpences);
router.get("/expence/:id", expenceController.getById);
router.post("/expences", expenceController.createExpence);
router.put("/expence/:id", expenceController.updateExpence);
router.delete("/expence/:id", expenceController.deleteExpence);


export default router;
