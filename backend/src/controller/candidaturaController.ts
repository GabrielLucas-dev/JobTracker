import type { Request, Response } from "express";
import * as candidaturaService from "../service/candidaturaService.ts"

export async function getCandidaturas(req: Request, res: Response) {
    const candidaturas = await candidaturaService.getCandidaturas();
    return res.status(200).json(candidaturas);
}