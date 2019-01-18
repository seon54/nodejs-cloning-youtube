import express from "express";
import routes from "../routes";
import { users, userDetail, changePassword, editProfile } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);

export default userRouter;