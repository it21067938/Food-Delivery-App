import express from "express";
import { UserRegister,
    Signin,
    Signout,
    tokenRefresh,} from "../controllers/User.js";

const router = express.Router();
router.post("/register", UserRegister);
router.post("/", Signin);
router.delete("signout", Signout);
router.post("/Token", tokenRefresh);

export default router;