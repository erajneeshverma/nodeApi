import express from "express";
import { deleteUserById, getAllUser, getSpecialUser, getUserById, registerUser, updateUserById } from "../controller/user.controller.js";
const router = express.Router();

router.get("/all", getAllUser);

router.get("/userid/special",getSpecialUser);


// router.get("/userid/:id",getUserById);
// router.put("/userid/:id",updateUserById);
// router.delete("/userid/:id",deleteUserById);

//instead we use..

//recommended method...
router.route("/userid/:id").get(getUserById).put(updateUserById).delete(deleteUserById);


router.post("/new", registerUser);

export default router;