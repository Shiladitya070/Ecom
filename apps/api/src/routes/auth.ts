import express from "express";
const router = express.Router();

// import { userProfile, login, Register } from "../controllers/Users";
// import { auth } from "../middleware/check-auth";

const userProfile = (req, res) => {
    res.status(400).json({ msg: "profile" });
}
const login = (req, res) => {
    res.status(400).json({ msg: "Login" });
}
const Register = (req, res) => {
    res.status(400).json({ msg: "register" });
}


router.route("/").get(userProfile);
router.route("/login").post(login);
router.route("/register").post(Register);

export default router;