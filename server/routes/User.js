import express from "express";
const router = express.Router();
import { upload } from "../middleware/multer.js";

import {
  login,
  logout,
  getUser,
  userUpdate,
  addTimeline,
  addProject,
  deleteTimeline,
  deleteProjects,
  myProfile,
  intro,
  addAchievement,
  deleteAchievements,
  addPassions,
  deletePassions
} from "../controller/User.js";
import { isAuthenticate } from "../middleware/authenticate.js";

export const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticate, myProfile);
userRouter.route("/admin/userUpdate").put(isAuthenticate, userUpdate);
userRouter.route("/admin/intro").post(upload.single('image'), isAuthenticate, intro);
userRouter.route("/admin/timeline/add").post(upload.single('image'), isAuthenticate, addTimeline);
userRouter.route("/active").get((req, res) => {res.send("active")});
// Apply upload middleware before isAuthenticate middleware

userRouter.route("/admin/project/add").post(upload.single('image'), isAuthenticate, addProject);
userRouter.route("/admin/achievement/add").post(upload.single('image'), isAuthenticate, addAchievement);
userRouter.route("/admin/passionate/add").post(upload.single('image'), isAuthenticate, addPassions);

userRouter.route("/admin/timeline/:id").delete(isAuthenticate, deleteTimeline);
userRouter.route("/admin/achievement/:id").delete(isAuthenticate, deleteAchievements);
userRouter.route("/admin/passionate/:id").delete(isAuthenticate, deletePassions);
userRouter.route("/admin/project/:id").delete(isAuthenticate, deleteProjects);


