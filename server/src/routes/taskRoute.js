import { Router } from "express";
import * as taskController from "../controllers/taskController.js";
const router = Router();

router.post("/create", taskController.createTask)
router.get("/", taskController.getAllTasks)
router.delete("/delete", taskController.deleteTask)

export default router;