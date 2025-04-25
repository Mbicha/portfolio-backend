import express from "express";
import * as Auth from "../controllers/auth.js";

const router = express.Router();

router.post('/register', Auth.register);
router.post('/login', Auth.login);

export default router;
