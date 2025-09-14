import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.getAllFromDB);

router.post("/", UserController.createUser);

export const UserRouter = router;
