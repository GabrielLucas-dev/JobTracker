//enum improvisado  
export type status = {
    aguardando: 'aguardando',
    aprovado: 'aprovado',
    reprovado: 'reprovado',
    cancelado: 'cancelado'
}

export interface Candidatura {
    id_candidatura: number 
    empresa: string 
    data_candidatura: string
    status_candidatura: status
    local_candidatura: string
    observacao?: string
    criado_em: string
}