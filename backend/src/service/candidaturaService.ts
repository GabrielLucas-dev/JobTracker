import type { Candidatura } from "../model/candidatura.js";
import * as candidaturaRepository from "../repository/candidaturaRepository.ts";

export async function getCandidaturas(): Promise<Candidatura[]> {
  const candidaturas = await candidaturaRepository.findCandidaturas();
  if (!candidaturas) {
    throw new Error("Nenhuma candidatura encontrada");
  }

  return candidaturas;
}

export async function createCandidatura(data: any): Promise<Candidatura[]> {    //parametro de dados que será utiliazado no Controller
  const candidaturas = await candidaturaRepository.createCandidatura(data);

  return candidaturas;
}
