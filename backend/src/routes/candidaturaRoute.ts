import express from "express";
import { getCandidaturas } from "../controller/candidaturaController.js";

const router = express.Router();

router.get('/', getCandidaturas)

export default router;
