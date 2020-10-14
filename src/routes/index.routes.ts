import { Router } from "express";
const router = Router();
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} from "../controllers/photo.controller";
//multer storage imp
import multer from "../libs/multer";

router.post("/photos", multer.single("image"), createPhoto);
router.get("/photos", getPhotos);
router.get("/photos/:id", getPhoto);
router.delete("/photos/:id", deletePhoto);
router.put("/photos/:id", updatePhoto);
export default router;
