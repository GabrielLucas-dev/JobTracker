import { createUser, getLogin, getUsers } from "../controller/userController.js";
import express from 'express'

const router = express.Router()

router.post('/', createUser)
router.get('/', getUsers)
router.post('/', getLogin)

export default router