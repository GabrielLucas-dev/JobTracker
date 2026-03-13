import express from "express";
import { getCandidaturas, postCandidatura } from "../controller/candidaturaController.ts";

const router = express.Router();

router.get('/', getCandidaturas)
router.post('/', postCandidatura)

export default router;
