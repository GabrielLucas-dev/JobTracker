import type { Candidatura } from "../model/candidatura.js";
import * as candidaturaRepository from '../repository/candidaturaRepository.ts'

export async function getCandidaturas(): Promise<Candidatura[]> {
    const candidaturas = await candidaturaRepository.findCandidaturas();
    
    if(!candidaturas){
        throw new Error('Nenhuma candidatura encontrada')
    }

    return candidaturas;
} 