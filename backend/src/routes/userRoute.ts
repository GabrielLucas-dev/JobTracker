import { createUser, getLogin, getUsers } from "../controller/userController.js";
import express from 'express'
// import { tokenAuth } from "../../middleware/tokenAuth.js";

const router = express.Router()

router.post('/register', createUser)
router.get('/', getUsers)
router.post('/login', getLogin)

export default router