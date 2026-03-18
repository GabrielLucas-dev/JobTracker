import express from "express";
import { getCandidaturas, postCandidatura, deleteCandidatura, editCandidatura, getCandidaturaById } from "../controller/candidaturaController.ts";

const router = express.Router();

router.get('/', getCandidaturas)
router.post('/', postCandidatura)
router.delete('/:id_candidatura', deleteCandidatura)
router.put('/:id_candidatura', editCandidatura)
router.get('/:id_candidatura', getCandidaturaById)

export default router;
