import express from "express";
import { getCandidaturas, postCandidatura, deleteCandidatura } from "../controller/candidaturaController.ts";

const router = express.Router();

router.get('/', getCandidaturas)
router.post('/', postCandidatura)
router.delete('/:id_candidatura', deleteCandidatura)

export default router;
