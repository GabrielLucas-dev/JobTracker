//enum improvisado  
export type StatusCandidatura = 
    | 'aguardando'
    | 'aprovado'
    | 'entrevista'
    | 'reprovado'
    | 'cancelado';


export interface Candidatura {
    id_candidatura: number 
    empresa: string 
    data_candidatura: string
    status_candidatura: StatusCandidatura
    local_candidatura: string
    observacao?: string
    criado_em: string
}