import type { Request, Response } from "express";
import * as candidaturaService from "../service/candidaturaService.ts"

export async function getCandidaturas(req: Request, res: Response) {
    const candidaturas = await candidaturaService.getCandidaturas();
    return res.status(200).json(candidaturas);
}

export async function postCandidatura(req: Request, res: Response) {
    const {empresa, dataCandidatura, statusCandidatura, localCandidatura, observacao} = req.body
    
    const candidaturas = await candidaturaService.createCandidatura({
        empresa: empresa,
        data_candidatura: dataCandidatura,
        status_candidatura: statusCandidatura,
        local_candidatura: localCandidatura,
        observacao: observacao
    });
    
    return res.status(201).json(candidaturas);
}

export async function deleteCandidatura(req: Request<{id_candidatura: number}>, res: Response) {
    const id_candidatura = req.params.id_candidatura;
    const remove = await candidaturaService.deleteCandidatura(id_candidatura)

    return res.status(201).json(remove);
} 

export async function editCandidatura(req: Request<{id_candidatura: number}>, res: Response) {
    const id_candidatura = req.params.id_candidatura;

    const {empresa, dataCandidatura, statusCandidatura, localCandidatura, observacao} = req.body
    const editCandidatura = await candidaturaService.editCandidatura({
        empresa: empresa,
        data_candidatura: dataCandidatura,
        status_candidatura: statusCandidatura,
        local_candidatura: localCandidatura,
        observacao: observacao
    }, id_candidatura)

    return res.status(201).json(editCandidatura)
}
