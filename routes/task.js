import express from "express"
import { deleteTask, getTask, newTask, updateTask } from "../controllers/task.js"
import { isAuthenticated } from "../middleWares/auth.js"

const router = express.Router()

router.post("/new",isAuthenticated, newTask )
router.get("/my",isAuthenticated, getTask )

router.route("/:taskid").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default router