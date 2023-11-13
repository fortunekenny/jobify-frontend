import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
  getAllUsers,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.get("/", authorizePermissions("admin"), getAllUsers);
router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);
export default router;
