import type { Request, Response } from "express";
import * as candidaturaService from "../service/candidaturaService.ts";
import type { AuthRequest } from "../model/authRequest.js";

export async function getCandidaturas(req: Request, res: Response) {
  const candidaturas = await candidaturaService.getCandidaturas();
  return res.status(200).json(candidaturas);
}

export async function postCandidatura(req: AuthRequest, res: Response) {
  const {
    empresa,
    dataCandidatura,
    statusCandidatura,
    localCandidatura,
    observacao,
  } = req.body;

  const userId = (req as any).user.id

  try{
    const candidaturas = await candidaturaService.createCandidatura({
      empresa: empresa,
      data_candidatura: dataCandidatura,
      status_candidatura: statusCandidatura,
      local_candidatura: localCandidatura,
      observacao: observacao,
      fk_id_user: userId
    });

  return res.status(201).json(candidaturas);
  } catch(error: any) {
    res.status(500).json({message: error.message})
  }

  //fk_id_user ESTA VINDO COMO NULL ARRUMAR ISSO

}

export async function deleteCandidatura(
  req: Request<{ id_candidatura: string }>,
  res: Response,
) {
  const id_candidatura = req.params.id_candidatura;
  const remove = await candidaturaService.deleteCandidatura(id_candidatura);

  return res.status(200).json(remove);
}

export async function editCandidatura(
  req: Request<{ id_candidatura: string }>,
  res: Response,
) {
  const id_candidatura = req.params.id_candidatura;

  const {
    empresa,
    dataCandidatura,
    statusCandidatura,
    localCandidatura,
    observacao,
  } = req.body;
  const editCandidatura = await candidaturaService.editCandidatura(
    {
      empresa: empresa,
      data_candidatura: dataCandidatura,
      status_candidatura: statusCandidatura,
      local_candidatura: localCandidatura,
      observacao: observacao,
    },
    id_candidatura,
  );

  return res.status(200).json(editCandidatura);
}

export async function getCandidaturaById(
  req: Request<{ id_candidatura: string }>,
  res: Response,
) {
  const id_candidatura = req.params.id_candidatura;
  const candidatura =
    await candidaturaService.getCandidaturaById(id_candidatura);
  return res.status(200).json(candidatura);
}
