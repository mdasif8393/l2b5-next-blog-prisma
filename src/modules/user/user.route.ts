import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.get("/", UserController.getAllFromDB);

router.post("/", UserController.createUser);

router.get("/:id", UserController.getSingleUser);

export const UserRouter = router;
