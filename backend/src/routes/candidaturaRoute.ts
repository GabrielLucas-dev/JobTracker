import express from "express";
import { getCandidaturas, postCandidatura, deleteCandidatura, editCandidatura, getCandidaturaById } from "../controller/candidaturaController.ts";
import { tokenAuth } from '../../middleware/tokenAuth.ts'

const router = express.Router();

router.get('/', tokenAuth, getCandidaturas)
router.post('/', tokenAuth, postCandidatura)
router.delete('/:id_candidatura', tokenAuth, deleteCandidatura)
router.put('/:id_candidatura', tokenAuth, editCandidatura)
router.get('/:id_candidatura',tokenAuth, getCandidaturaById)

export default router;
