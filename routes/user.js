import express from "express";
import {    getMyDetails,  login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middleWares/auth.js";

const router = express.Router();


router.post("/new", register)
router.post("/login", login)
router.get("/logout",isAuthenticated, logout)


// both Are same   

router.get("/me", isAuthenticated, getMyDetails) /*This one is more preferrable */

// router.get("/userid/:id",getUserByID)

// router.put("/userid/:id",updateUser)

// router.delete("/userid/:id",deleteUser)

export default router