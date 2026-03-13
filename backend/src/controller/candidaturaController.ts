import type { Request, Response } from "express";
import * as candidaturaService from "../service/candidaturaService.ts"

export async function getCandidaturas(req: Request, res: Response) {
    const candidaturas = await candidaturaService.getCandidaturas();
    return res.status(200).json(candidaturas);
}

export async function postCandidatura(req: Request, res: Response) {
    
    console.log(req.body)

    const {empresa, data_candidatura, status_candidatura, local_candidatura, observacao} = req.body
    
    const candidaturas = await candidaturaService.createCandidatura({
        empresa,
        data_candidatura,
        status_candidatura,
        local_candidatura,
        observacao
    });
    
    return res.status(201).json(candidaturas);

}
