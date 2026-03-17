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
  const candidatura = await candidaturaRepository.createCandidatura(data);

  return candidatura;
}

export async function deleteCandidatura(id: number): Promise<Candidatura[]> {
    if(!id) throw new Error('ID inexistente!')

    const deletar = await candidaturaRepository.removeCandidatura(id);
    return deletar;
}

export async function editCandidatura(data: any, id: number): Promise<Candidatura[]> {
  if(!id) throw new Error("ID inexistente!")

    const edit = await candidaturaRepository.alterCandidatura(data, id);
    return edit;
}