import express from "express";
import {
  createLibrary,
  updateLibrary,
  listLibraries,
  getLibrary,
  deleteLibrary
} from "../controllers/library.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createLibrarySchema, updateLibrarySchema } from "../validations/library.validation.js";

const router = express.Router();

router.get("/", listLibraries);
router.get("/:id", getLibrary);

router.post("/", authMiddleware, validate(createLibrarySchema), createLibrary);
router.put("/:id", authMiddleware, validate(updateLibrarySchema), updateLibrary);
router.delete("/:id", authMiddleware, deleteLibrary);

export default router;
