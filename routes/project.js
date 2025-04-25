import express from "express";
import * as Project from "../controllers/project.js";
const router = express.Router();


router.get("/", Project.getProjects);
router.get("/:id", Project.getProjectById);
router.post("/", Project.newProject);
router.patch("/:id", Project.updateProject);
router.delete("/:id", Project.deleteProject);

export default router;
