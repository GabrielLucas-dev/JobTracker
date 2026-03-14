//enum improvisado  
export const StatusCandidatura = {
    aguardando: 'aguardando',
    aprovado: 'aprovado',
    entrevista: 'entrevista',
    reprovado: 'reprovado',
    cancelado: 'cancelado'
} as const;

export type StatusCandidatura = typeof StatusCandidatura[keyof typeof StatusCandidatura];

export interface Candidatura {
    id_candidatura: number 
    empresa: string 
    data_candidatura: string
    status_candidatura: StatusCandidatura
    local_candidatura: string
    observacao?: string
    criado_em: string
}